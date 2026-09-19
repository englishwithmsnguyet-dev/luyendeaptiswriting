import json
from clubs_batch_1 import batch_1
from clubs_batch_2 import batch_2
from clubs_batch_3 import batch_3
from clubs_batch_4 import batch_4

all_clubs = {}
all_clubs.update(batch_1)
all_clubs.update(batch_2)
all_clubs.update(batch_3)
all_clubs.update(batch_4)

print(f"Total clubs combined: {len(all_clubs)}")
for k in all_clubs.keys():
    print(f" - {k}")

# Read the common templates code from generate_part4_dataset.py
from generate_part4_dataset import common_templates_code

with open("src/data/part4Data.js", "w", encoding="utf-8") as f:
    f.write(common_templates_code)
    f.write("\n\nexport const part4Data = ")
    json.dump(all_clubs, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Successfully written to src/data/part4Data.js!")
