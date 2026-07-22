        🔄Consistent Hashing 

📌 What is Consistent Hashing?

Easy language: Ek smart technique hai jisse data ko servers mein evenly distribute 
kiya jaata hai, aur agar koi server add ya remove ho toh minimum data move ho.


🔧 Normal hashing problem :-

3 servers hain:
server = hash(key) % 3

Key "user1" → hash = 10 → 10 % 3 = 1 → Server 1
Key "user2" → hash = 20 → 20 % 3 = 2 → Server 2
Key "user3" → hash = 30 → 30 % 3 = 0 → Server 0

