# Core Publishing



## 콘텐츠 전송 네트워크(Content Delivery Network, CDN)


### 웹 폰트(Web Fonts)
> 사용자가 내 컴퓨터에 폰트를 설치하지 않아도 특정 서버에 위치한 폰트 파일을 받고 웹 페이지에 구현할 수 있는 웹 전용 폰트

실습용으로는 구글에서 제공하는 [구글 웹 폰트](https://fonts.google.com) 또는 [눈누](https://noonnu.cc) 무료 웹 폰트를 사용합니다.


### 웹 폰트 선언하기
웹 폰트를 선언하고 사용하는 과정을 간단하게 정리해봅시다.  
아래 예제는 여러 웹 폰트 중 하나인 [Sunflower](https://fonts.google.com/specimen/Sunflower?subset=korean)를 적용하는 방법입니다.
```css
@import url('https://fonts.googleapis.com/css2?family=Sunflower:wght@300;500;700&display=swap');
```

### 웹 폰트 사용하기
```css
font-family: 'Sunflower', sans-serif;
```


### [jQuery](https://jquery.com/)(제이쿼리)
```css
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
```
