import csv
import os

# Assuming the file "question.csv" is in the same directory as this script
file_path = 'day.csv'

# Check if the file exists in the current directory
if os.path.exists(file_path):
    # Read and process the file
    processed_questions = []
    with open(file_path, mode='r', encoding='utf-8') as file:
        csv_reader = csv.reader(file)
        for row in csv_reader:
            for question in row:
                # Add double quotes to questions without them
                if '"' not in question:
                    question = f'"{question}"'
                processed_questions.append(question)

# Example output format
example_output = "const generalQuestions = [\n"
example_output += ",\n".join(processed_questions[:])  # Displaying only the first 3 for example
example_output += "\n];"
print(example_output)

