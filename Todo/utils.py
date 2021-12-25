from random import choices, randint
import string


def get_random_uniq_string(char_number=4):
    letters = string.ascii_letters
    digits = randint(1000, 9999)
    char_list = choices(letters, k=char_number)
    char_list.append(str(digits))
    total_string = "".join(item for item in char_list)
    return total_string


if __name__ == "__main__":
    get_random_uniq_string()