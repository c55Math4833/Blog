#include <OneWire.h>
#include <DallasTemperature.h>
#include <LiquidCrystal_PCF8574.h>
#define DQ_pin 2  

OneWire oneWire(DQ_pin);
DallasTemperature sensors(&oneWire);
LiquidCrystal_PCF8574 lcd(0x27);

void setup(void)
{
    Serial.begin(9600);
    sensors.begin();
    lcd.begin(16, 2); // initialize the lcd  
}

void loop(void)
{
    lcd.setBacklight(10);
    lcd.home();
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Temperature : ");
    lcd.setCursor(0, 1);
    sensors.requestTemperatures();
    lcd.print(sensors.getTempCByIndex(0));
    delay(500);
}

