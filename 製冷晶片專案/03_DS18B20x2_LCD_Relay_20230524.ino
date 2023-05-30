#include <OneWire.h> 
#include <DallasTemperature.h> 
#include <LiquidCrystal_PCF8574.h>

#define D2_Pin 2
#define D3_Pin 3

OneWire oneWire1(D2_Pin);
OneWire oneWire2(D3_Pin);
DallasTemperature sensors1(&oneWire1);
DallasTemperature sensors2(&oneWire2);
LiquidCrystal_PCF8574 lcd(0x27);

void setup(void)
{
  Serial.begin(9600);
  sensors1.begin();
  sensors2.begin();
  lcd.begin(16, 2); // initialize the lcd
  pinMode(4,OUTPUT);
}

void loop(void)
{
  sensors1.requestTemperatures();
  sensors2.requestTemperatures();

  float temp1 = sensors1.getTempCByIndex(0);
  float temp2 = sensors2.getTempCByIndex(0);
  float deltaT = abs(temp1 - temp2);
  Serial.print("Temperature 1 --> ");
  Serial.println(temp1);
  Serial.print("Temperature 2 --> ");
  Serial.println(temp2);
  Serial.print("Delta T --> ");
  Serial.println(deltaT);

  lcd.setBacklight(HIGH);
  lcd.setCursor(0, 0);
  lcd.print("T:");
  lcd.print(temp1);
  lcd.print("/");
  lcd.print(temp2);
  lcd.setCursor(0, 1);
  lcd.print("delta T=");
  lcd.print(deltaT);
  
  if (deltaT <= 60) {
    digitalWrite(4, LOW); // 低於閥值時關閉繼電器
  } else {
    digitalWrite(4, HIGH); // 高於閥值時開啟繼電器
  }

  delay(50);
}
