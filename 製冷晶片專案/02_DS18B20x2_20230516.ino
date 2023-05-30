#include <OneWire.h> 
#include <DallasTemperature.h> 

#define D2_Pin 2
#define D3_Pin 3

OneWire oneWire1(D2_Pin);
OneWire oneWire2(D3_Pin);
DallasTemperature sensors1(&oneWire1);
DallasTemperature sensors2(&oneWire2);

void setup(void)
{
  Serial.begin(9600);
  sensors1.begin();
  sensors2.begin();
}

void loop(void)
{
  sensors1.requestTemperatures();
  sensors2.requestTemperatures();
  Serial.print("Temperature 1 --> ");
  Serial.println(sensors1.getTempCByIndex(0));
  Serial.print("Temperature 2 --> ");
  Serial.println(sensors2.getTempCByIndex(0));
  delay(100);
}
