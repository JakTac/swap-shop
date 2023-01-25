from roman_numerals import from_roman_to_arabic

def test_25():
    # Arrange
    input = "XXV"

    # Act
    result = from_roman_to_arabic(input)

    # Assert
    assert result == 25
