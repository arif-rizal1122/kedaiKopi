
document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
       items: [
          {id: 1, name: "singer GOAT",    img: "aimer(1).jpg", price: 20000},
          {id: 2, name: "singer Aimer2",  img: "aimer(2).jpeg", price: 40000},
          {id: 3, name: "singer Aimer3",  img: "aimer(4).jpeg", price: 60000},
          {id: 4, name: "singer Harutya",  img: "harutya(1).jpeg", price: 80000},
        ]
    }))

    // card adalah nama data nya..
    Alpine.store('card', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
           // cek adakah barang yg sama
           const cardItem = this.items.find((item) => item.id === newItem.id)
           // jika belum ada / card nya kosong
           if (!cardItem) {
            // dipecah
              this.items.push({...newItem, quantity: 1, total: newItem.price}) 
              this.quantity++
              this.total += newItem.price
           } else {
            // jika barang sudah ada, cek apakah barang beda atau sama dengan yg ada di card 
            this.items = this.items.map((item) => {
            // jika barang berbeda 
                if (item.id !== newItem.id) {
                    return item
                } else {
            // jika barang sudah ada , maka tambah quantity dan subtotal nya
                item.quantity++
                item.total =  item.price * item.quantity
                this.quantity++
                this.total += item.price
                return item
                }
            })
           }
           
           
        },

        remove(id) {
        // ambil item yg mau diremove berdasarkan id nya
        const cardItem =  this.items.find((item) => item.id === id)

        // jika item lebih dari 1
        if (cardItem.quantity > 1) {
        // telusiri satu-satu
        this.items = this.items.map((item) => {
        // jika barang yg diklick
        if (item.id !== id) {
            return item
        }
        // kalau benar maka kita kuranggi
        item.quantity--
        item.total = item.price * item.quantity
        this.quantity--
        this.total -= item.price
        return item
         })
        } else if(cardItem.quantity === 1) {
        // jika barang nya sisa satu   
        
        // akan berisi semua barang kecuali barang yg di click
        this.items = this.items.filter((item) => item.id !== id)
        this.quantity--
        this.total -= cardItem.price
        }
     }
    })
})





// konversi ke format rupiah


const rupiah = (number) => {
    return new Intl.NumberFormat('id-Id', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number)
}