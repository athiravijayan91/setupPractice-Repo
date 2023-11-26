
import {Builder, Capabilities, WebDriver, until, WebElement, By} from 'selenium-webdriver'; 
const chromedriver = require('chromedriver'); 
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build(); 

//import our class from the page object file

import { methodsPage } from './employeeManagerPageObject';
const mp = new methodsPage(driver); 

//test set up 

describe("Practicing Page Objects", () => {
    beforeEach(async () => {
        await mp.navigate(); 
    });
    afterAll(async () => {
        await mp.driver.quit(); 
    }); 

    test('adding an employee using an outside pom', async () => {
        await mp.click(mp.addEmployee); 
        await mp.click(mp.newEmployee); 
        await mp.setInput(mp.nameInput, 'Cal Kestis'); 
        await mp.setInput(mp.phoneInput,12345678901); 
        await mp.setInput(mp.titleInput, 'Restorer of the Jedi Order'); 
        await mp.click(mp.saveBtn); 
    }); 

}); 
