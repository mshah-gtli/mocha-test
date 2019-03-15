const {Builder, By, Key, until} = require('selenium-webdriver');

var chai = require('chai');

var expect = chai.expect;

var url = 'https://google.com';

let driver = new Builder()
.forBrowser('firefox')
.build();

describe( 'Test for DotD HTML5 using RYANCore' , function(){
    
       before(function(){
            return driver.get( this.url);   
       });
    
       after(function(){
    
           return driver.quit();
    
       });

        it( 'Should Launch the Test for testing google',function(done) {
            try{
            driver.wait(until.titleIs('Google'), 10000);

            
        }catch(error){
            done(error);
        }
            
            
        });
                    
});