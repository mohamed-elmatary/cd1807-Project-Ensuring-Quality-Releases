# #!/usr/bin/env python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.common.by import By
import time
import tempfile
import shutil


# Start the browser and login with standard_user
def login (user, password):
    print ('Starting the browser...')
    # --uncomment when running in Azure DevOps.
    options = ChromeOptions()
    user_data_dir = tempfile.mkdtemp()
    shutil.rmtree(user_data_dir)
    user_data_dir = tempfile.mkdtemp()

    options.add_argument(f"--user-data-dir={user_data_dir}")
    options.add_argument("--headless=new")  # Use 'new' for modern Chrome
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--disable-gpu")
    options.add_argument("--disable-extensions")
    options.add_argument("--remote-debugging-port=9222")


    driver = webdriver.Chrome(options=options)
    print ('Browser started successfully. Navigating to the demo page to login.')
    driver.get('https://www.saucedemo.com/')
    # Log in to the website
    # Enter the username
    driver.find_element(By.ID, 'user-name').send_keys('standard_user')
    # Enter the password
    driver.find_element(By.ID, 'password').send_keys('secret_sauce')
    # Click the login button
    driver.find_element(By.ID, 'login-button').click()

    # Wait for the page to load
    time.sleep(2)  # Wait for 2 seconds

    return driver, user_data_dir

# ToDo: Add more functional UI tests as per your requirements. 