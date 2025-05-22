import logging
from login import login
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import time

# Setup logging
logging.basicConfig(
    filename='selenium_test.log',
    filemode='w',
    format='%(asctime)s - %(levelname)s - %(message)s',
    level=logging.INFO
)

print("Launching UI Test Suite...")
logging.info("Launching UI Test Suite...")

# Login to the site
driver = login('standard_user', 'secret_sauce')
logging.info("Logged into the saucedemo site.")

# After login
WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.CLASS_NAME, "inventory_list"))
)

# Step 1: Add all products to cart
print("Adding all products to cart...")
logging.info("Adding all products to cart...")

add_buttons = driver.find_elements(By.XPATH, "//button[contains(text(),'Add to cart')]")
for btn in add_buttons:
    btn.click()
print(f"{len(add_buttons)} products added.")
logging.info(f"{len(add_buttons)} products added.")

# Step 2: Navigate to cart
driver.find_element(By.CLASS_NAME, "shopping_cart_link").click()
print("Navigated to cart.")
logging.info("Navigated to cart.")

# Step 3: Remove all products from cart
print("Removing all products from cart...")
logging.info("Removing all products from cart...")

remove_buttons = driver.find_elements(By.XPATH, "//button[contains(text(),'Remove')]")
for btn in remove_buttons:
    btn.click()
print(f"{len(remove_buttons)} products removed.")
logging.info(f"{len(remove_buttons)} products removed.")

# Wrap up
driver.quit()
print("Test Suite complete. Browser closed.")
logging.info("Test Suite complete. Browser closed.")

driver.quit()
