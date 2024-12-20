Start Project
ทดสอบการทำงานของ API
- ตั้งค่าเป็น POST request:
- ระบุ URL: http://localhost:4000/api/calculator
- ในส่วน Body ของ Postman ให้เลือก raw แล้วเลือก JSON format และใส่ข้อมูลตามตัวอย่างข้อมูล JSON:


Desk#1: Customers order Red set and Green set; price from calculation is 90

ตัวอย่างข้อมูล JSON:

```
{
  "items": [
    { "menu": "red", "quantity": 1 },
    { "menu": "green", "quantity": 1 }
  ]
}
```
ผลลัพธ์ที่ได้
```
{
    "items": [
        {
            "menu": "red",
            "quantity": 1
        },
        {
            "menu": "green",
            "quantity": 1
        }
    ],
    "grandTotal": 90
}
```

2. Customers can use a member card, then the price should be deducted by discount amount 10%.

ตัวอย่างข้อมูล JSON:
```
{
  "items": [
    { "menu": "red", "quantity": 1 },
    { "menu": "green", "quantity": 1 }
  ],
   "memberShip": true
}
```
ผลลัพธ์ที่ได้
```
{
    "items": [
        {
            "menu": "red",
            "quantity": 1
        },
        {
            "menu": "green",
            "quantity": 1
        }
    ],
    "grandTotal": 81
}
```

3.For Orange sets, if customers order 5 items per bill. customers will get a 5% discount for 4 items (2 pairs).

ตัวอย่างข้อมูล JSON:
```
{
  "items": [
    { "menu": "orange", "quantity": 5 }
  ],
   "memberShip": true
}
```
ผลลัพธ์ที่ได้
```
{
    "items": [
        {
            "menu": "orange",
            "quantity": 5
        }
    ],
    "grandTotal": 528
}
```
