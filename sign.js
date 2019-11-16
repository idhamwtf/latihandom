class User{
    constructor(username,password){
        this.username=username,
        this.password=password
    }
}

class Barang{
    constructor(namabarang,hargabarang,gambarbarang){
        this.namabarang=namabarang,
        this.hargabarang=hargabarang,
        this.gambarbarang=gambarbarang
    }
}

var dataUser=[
    new User('admin','admin'),
    new User('idham','123')
]

var dataLogin={

}

var dataBarang=[
    new Barang('Honda Civic 2017','10000','https://www.cstatic-images.com/car-pictures/xl/usc70hoc024f021001.png'),
    new Barang('Toyota Camry 2017','5000','https://www.cstatic-images.com/car-pictures/xl/usc60toc021a021001.png')
]

var dataCart=[

]




const printData=(a)=>{
    var printdata=''
    var table = `<thead>
                    <tr>
                    <td>NO</td>
                    <td>USERNAME</td>
                    <td>PASSWORD</td>
                    <td>ACTION</td>
                    </tr>
                 </thead>
                 <tbody>

                 </tbody>
                 `
    document.getElementsByTagName('table')[0].innerHTML=table
    a.forEach((val,index)=>{
        printdata+=`<tr>
                        <td>${index+1}</td>
                        <td>${val.username}</td>
                        <td>${val.password}</td>
                        <td><button onclick="onClickEdit(${index})">Edit</button><button onclick="onClickDelete(${index})">Delete</button></td>
                    </tr>`
    })
    document.getElementsByTagName('tbody')[0].innerHTML=printdata
}

const printBelanja=(a)=>{
    var printdata=''
    var table = `<thead>
                    <tr>
                    <td>NO</td>
                    <td>Mobil</td>
                    <td>Harga</td>
                    <td>GAMBAR</td>
                    <td>BELI</td>
                    </tr>
                 </thead>
                 <tbody>

                 </tbody>
                 `
    document.getElementsByTagName('table')[0].innerHTML=table
    a.forEach((val,index)=>{
        printdata+=`<tr>
                        <td>${index+1}</td>
                        <td>${val.namabarang}</td>
                        <td>Rp. ${val.hargabarang}</td>
                        <td><img src=${val.gambarbarang} height='100px'/></td>
                        <td><button onclick="onClickAddCart(${index})">Add to Cart</button></td>
                    </tr>`
    })
    document.getElementsByTagName('tbody')[0].innerHTML=printdata

}


const printBelanjaAdmin=(a)=>{
    var printdata=''
    var table = `<thead>
                    <tr>
                    <td>NO</td>
                    <td>Mobil</td>
                    <td>Harga</td>
                    <td>GAMBAR</td>
                    <td>BELI</td>
                    </tr>
                 </thead>
                 <tbody>

                 </tbody>
                 `
    document.getElementsByTagName('table')[1].innerHTML=table
    a.forEach((val,index)=>{
        printdata+=`<tr>
                        <td>${index+1}</td>
                        <td>${val.namabarang}</td>
                        <td>Rp. ${val.hargabarang}</td>
                        <td><img src=${val.gambarbarang} height='100px'/></td>
                        <td><button onclick="onClickEditBarang(${index})">Edit</button><button onclick="onClickDeleteAdmin(${index})">Delete</button></td>
                    </tr>`
    })
    document.getElementsByTagName('tbody')[1].innerHTML=printdata

}

var belanjaan=0
var totalbelanja = 0
const printCart=(a)=>{
    var printCart=''
    var table = `<thead>
                    <tr>
                    <td>NO</td>
                    <td>Mobil</td>
                    <td>Harga</td>
                    <td>GAMBAR</td>
                    <td>BELI</td>
                    </tr>
                 </thead>
                 <tbody>

                 </tbody>
                 `
    document.getElementsByTagName('table')[1].innerHTML=table
    a.forEach((val,index)=>{

        printCart+=`<tr>
                        <td>${index+1}</td>
                        <td>${val.namabarang}</td>
                        <td>Rp. ${val.hargabarang}</td>
                        <td><img src=${val.gambarbarang} height='100px'/></td>
                        <td><button onclick="onClickDeleteCart(${index})">GAJADI</button></td>
                    </tr>`
        // totalbelanja += parseInt(val.hargabarang)
        
        
    })
    document.getElementsByTagName('tbody')[1].innerHTML=printCart
    return console.log(belanjaan)
    
}




const onClickLogin=()=>{
var userid= document.getElementById('username').value
var userpass=document.getElementById('password').value
var newLogin = dataUser.filter((val)=>val.username==userid&&val.password==userpass)
dataLogin=newLogin[0]
console.log(dataLogin)
if(dataLogin){
        if(dataLogin.username=='admin'){
            console.log('admin')
            console.log(dataLogin)
            document.getElementsByTagName('h2')[0].innerHTML = `HALAMAN ADMIN`
            document.getElementsByTagName('div')[0].innerHTML= `<h1>XAMNSO MART</h1>`
            document.getElementsByTagName('h4')[0].innerHTML= `<button onclick="">Add</button>`
            document.getElementsByTagName('h4')[1].innerHTML= `<button onclick="">Add</button>`
            document.getElementsByTagName('h5')[0].innerHTML= `<button onclick="onClickLogout()">Logout</button>`
            printData(dataUser)
            printBelanjaAdmin(dataBarang)
        }else if(dataLogin){
            console.log('user')
            console.log(dataLogin)
            document.getElementsByTagName('div')[0].innerHTML= `<h1>XAMNSO MART</h1>`
            document.getElementsByTagName('h2')[0].innerHTML = `Halo, ${userid} silahkan berbelanja`
            document.getElementsByTagName('h5')[0].innerHTML= `<button onclick="onClickLogout()">Logout</button>`
            printBelanja(dataBarang)
        }
    }else{
    document.getElementsByTagName('h2')[0].innerHTML = `Silahkan daftar dulu`
    }
}


const onClickRegister=()=>{
var userid= document.getElementById('username').value
var userpass=document.getElementById('password').value
dataUser.push(new User(userid,userpass))
console.log(dataUser)
document.getElementsByTagName('h2')[0].innerHTML =`selamat ${userid} anda berhasil register`
}


const onClickLogout=()=>{
var konfirmasilogout=confirm('Yakin Mau Logout?')
console.log(konfirmasilogout)
if(konfirmasilogout){
    document.getElementsByTagName('h2')[0].innerHTML=``
    document.getElementsByTagName('h5')[0].innerHTML=``
    document.getElementsByTagName('table')[0].innerHTML=``
    document.getElementsByTagName('div')[0].innerHTML = ` 
    <input type="text" id="username" placeholder="masukkan username"><br>
    <input type="password" id="password" placeholder="masukkan password"><br>
    <button onclick="onClickRegister()">Register</button><button onclick="onClickLogin()">Login</button>
                                        `
}
}

const onClickEdit=(a)=>{
    konfirmasiedit=confirm(`Yakin mau Edit data ${dataUser[a].username}`)
    console.log(konfirmasiedit)
    if(konfirmasiedit){
        var edituser = prompt(`Username Baru`)
        console.log(edituser)
        var editpassword = prompt(`Password Baru`)
        console.log(editpassword)
        if(edituser){
            dataUser[a].username=edituser
        }
        if(editpassword){
            dataUser[a].password=editpassword
        }
        printData(dataUser)

    }
}

const onClickEditBarang=(a)=>{
    konfirmasiedit1=confirm(`Yakin mau Edit data ${dataBarang[a].namabarang}`)
    console.log(konfirmasiedit1)
    if(konfirmasiedit1){
        var editnamabarang = prompt(`Nama barang baru`)
        console.log(editnamabarang)
        console.log(dataBarang)
        var edithargabarang = parseInt(prompt(`Harga barang baru`))
        console.log(edithargabarang)
        var editgambarbarang = prompt(`Gambar barang baru`)
        if(editnamabarang){
            dataBarang[a].namabarang=editnamabarang
            console.log(dataBarang)
        }
        if(edithargabarang){
            dataBarang[a].hargabarang=edithargabarang
        }
        if(editgambarbarang){
            dataBarang[a].gambarbarang=editgambarbarang
        }

        printBelanjaAdmin(dataBarang)
    }
}

const onClickAddCart=(a)=>{
    dataCart.push(dataBarang[a])
    printCart(dataCart)
    document.getElementsByTagName('h4')[0].innerHTML=`Total Belanjaan anda ${totalbelanja}`
    belanjaan+=1
    console.log(totalbelanja)
    

}

const onClickDeleteCart=(a)=>{
    console.log(dataCart[a].namabarang)
    var konfirmasidelete=confirm(`Yakin mau delete ${dataBarang[a].namabarang}`)
    if(konfirmasidelete){
        dataCart.splice(a,1)
        printCart(dataCart)
        belanjaan-=1
        totalbelanja-=dataCart[a]
        console.log(belanjaan)
    }
    if(belanjaan==0){
        document.getElementsByTagName('table')[1].innerHTML=``
        document.getElementsByTagName('h4')[0].innerHTML=`Tidak ada barang Belanjaan`
        totalbelanja=0
    }
}


const onClickDelete=(a)=>{
    console.log(dataUser[a].username)
    var konfirmasidelete=confirm(`Yakin mau delete ${dataUser[a].username}`)
    if(konfirmasidelete){
        dataUser.splice(a,1)
        printData(dataUser)
    }
    
}

const onClickDeleteAdmin=(a)=>{
    console.log(dataBarang[a].namabarang)
    var konfirmasidelete=confirm(`Yakin mau delete ${dataBarang[a].namabarang}`)
    if(konfirmasidelete){
        dataBarang.splice(a,1)
        printBelanjaAdmin(dataBarang)
    }
}

// printData(dataUser)
// printBelanjaAdmin(dataBarang)
// document.getElementsByTagName('h4')[0].innerHTML= `<button onclick="">Add</button>`
// document.getElementsByTagName('h4')[1].innerHTML= `<button onclick="">Add</button>`