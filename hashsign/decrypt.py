import json
from cryptography.hazmat.primitives.kdf.scrypt import Scrypt
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives import hashes

# Load the JSON file
with open("twbackup.json", "r") as file:
    data = json.load(file)

# Extract necessary details from the JSON data
password = b"YourPassword-goes-here"  # Your password as a byte string
crypto = data["crypto"]
salt = (
    bytes.fromhex(crypto["kdfparams"]["salt"]
                  ) if crypto["kdfparams"]["salt"] else b""
)
n = crypto["kdfparams"]["n"]
r = crypto["kdfparams"]["r"]
p = crypto["kdfparams"]["p"]
dklen = crypto["kdfparams"]["dklen"]
iv = bytes.fromhex(crypto["cipherparams"]["iv"])
ciphertext = bytes.fromhex(crypto["ciphertext"])
expected_mac = bytes.fromhex(crypto["mac"])

# Derive the key using scrypt
kdf = Scrypt(salt=salt, length=dklen, n=n, r=r, p=p, backend=default_backend())
key = kdf.derive(password)

# Decrypt the ciphertext
cipher = Cipher(algorithms.AES(key[:16]),
                modes.CTR(iv), backend=default_backend())
decryptor = cipher.decryptor()
plaintext = decryptor.update(ciphertext) + decryptor.finalize()

# Verify the MAC to ensure decryption was successful
h = hashes.Hash(hashes.SHA256(), backend=default_backend())
h.update(key[16:32])
h.update(ciphertext)
computed_mac = h.finalize()

# Debugging output
print("Derived key:", key.hex())
print("IV:", iv.hex())
print("Ciphertext:", ciphertext.hex())
print("Expected MAC:", expected_mac.hex())
print("Computed MAC:", computed_mac.hex())

if computed_mac == expected_mac:
    print("MAC verified successfully!")
    print("Decrypted private key:", plaintext)
else:
    print("MAC verification failed! Check your password and parameters.")
