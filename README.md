# Kava popup
Custom popup window from Omelchenko Sergey

### Installation

install package npm command

```sh
$ npm install kava-popup
```
### Usage
```sh
   let modal = new kavaPopup({
        title: 'Sergei Omelchenko',
        message: 'Hi, i am front-end developer',
        animation: 'zoom',
        escape: true
    });
```

### Includes
```sh
    <link rel="stylesheet" href="kava-popup.css">
    <script src="kava-popup.js" type="text/javascript"></script>
```
or
```sh
    js:
        import kavaPopup from 'kava-popup';
    css:
        import 'node_modules/kava-popup.css';
```
### Property


| Property | Description |
| ------ | ------ |
| title | Title modal window |
| message | Text popup |
| animation | fadeIn, fadeUp, zoom. Default fadeUp |
| escape | [true, false] click button Escape to close |

### Example
```sh
$('.popup').on('click', function(e){
    e.preventDefault();
    let modal = new kavaPopup({
        title: 'Sergei Omelchenko',
        message: 'Hi, i am front-end developer',
        animation: 'zoom',
        escape: true
    });
});

```


