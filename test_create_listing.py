import { CreateListing } from "ghi/src/Listings/CreateListing";
import { create } from "swapshop/queries/listings";
import { create_listing } from "swapshop/routers/listings";

def test_image_url():
# Arrange
    input = image_url

# Act
    result = CreateListing.image_url(input)

# Assert
    assert result != None

def test_name():
# Arrange
    input = name

# Act
    result = CreateListing.name(input)

# Assert
    assert result != None

def category_id():
# Arrange
    input = category_id

# Act
    result = CreateListing.category_id(input)

# Assert
    assert result != None

def test_condition():
# Arrange
    input = condition

# Act
    result = CreateListing.condition(input)

# Assert
    assert result != None

def test_price():
# Arrange
    input = price

# Act
    result = CreateListing.price(input)

# Assert
    assert result != None

def test_description():
# Arrange
    input = description

# Act
    result = CreateListing.description(input)

# Assert
    assert result != None
