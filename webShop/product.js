// <head>
//     <title> test</title>
//     <meta charSet="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
//             <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"/>
//             <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"/>
//             <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"/>
// </head>
//         <body>
//
//             <div class="container">
//                 <h2>Button Outline</h2>
//                 <button type="button" class="btn btn-outline-primary">Primary</button>
//                 <button type="button" class="btn btn-outline-secondary">Secondary</button>
//                 <button type="button" class="btn btn-outline-success">Success</button>
//                 <button type="button" class="btn btn-outline-info">Info</button>
//                 <button type="button" class="btn btn-outline-warning">Warning</button>
//                 <button type="button" class="btn btn-outline-danger">Danger</button>
//                 <button type="button" class="btn btn-outline-dark">Dark</button>
//                 <button type="button" class="btn btn-outline-light text-dark">Light</button>
//             </div>

class Product {
    constructor(name,price,desc,img) {
        this.id = 0;
        this.name = name;
        this.price = price;
        this.desc = desc;
        this.img = img;
    }

    setId(id){
        this.id = id;
    }
    getId(id){
        return this.id;
    }

    edit(id){

    }

    getHtml(){
        let str = `<tr>
                        <td>${this.id}</td>
                        <td>${this.name}</td>
                        <td>${this.price}</td>
                       
                   </tr>`;
        return str;
    }
}
