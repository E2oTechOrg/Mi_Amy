/*=========================================
        MIAMI BEAUTY LOUNGE
=========================================*/

const services = [

    {
        category: "Hair Services",
        icon: "fa-cut",
        items: [
            {
                id: 1,
                name: "Professional Hair Cut",
                description: "Classic haircut by our senior professional stylist.",
                duration: "45 mins",
                price: 499,
                image: "img/services/haircut.jpg"
            },
            {
                id: 2,
                name: "Hair Spa",
                description: "Deep nourishment using premium keratin products.",
                duration: "60 mins",
                price: 999,
                image: "img/services/hair-spa.jpg"
            },
            {
                id: 3,
                name: "Hair Coloring",
                description: "Professional ammonia-free hair coloring.",
                duration: "90 mins",
                price: 1499,
                image: "img/services/hair-color.jpg"
            },
            {
                id: 4,
                name: "Keratin Treatment",
                description: "Smooth and silky hair treatment.",
                duration: "120 mins",
                price: 3499,
                image: "img/services/keratin.jpg"
            }
        ]
    },

    {
        category: "Facial",
        icon: "fa-spa",
        items: [
            {
                id: 5,
                name: "Gold Facial",
                description: "Luxury facial for glowing skin.",
                duration: "60 mins",
                price: 899,
                image: "img/services/gold-facial.jpg"
            },
            {
                id: 6,
                name: "Diamond Facial",
                description: "Premium diamond glow treatment.",
                duration: "75 mins",
                price: 1299,
                image: "img/services/diamond-facial.jpg"
            },
            {
                id: 7,
                name: "Fruit Facial",
                description: "Natural fruit facial for healthy skin.",
                duration: "50 mins",
                price: 699,
                image: "img/services/fruit-facial.jpg"
            }
        ]
    },

    {
        category: "Makeup",
        icon: "fa-magic",
        items: [
            {
                id: 10,
                name: "Party Makeup",
                description: "Professional party makeup.",
                duration: "90 mins",
                price: 2499,
                image: "img/services/party-makeup.jpg"
            },
            {
                id: 11,
                name: "Bridal Makeup",
                description: "Luxury bridal makeover package.",
                duration: "180 mins",
                price: 12999,
                image: "img/services/bridal.jpg"
            }
        ]
    },

    {
        category: "Spa",
        icon: "fa-leaf",
        items: [
            {
                id: 12,
                name: "Full Body Spa",
                description: "Relaxing aroma therapy massage.",
                duration: "90 mins",
                price: 1999,
                image: "img/services/body-spa.jpg"
            },
            {
                id: 13,
                name: "Head Massage",
                description: "Stress relief massage.",
                duration: "30 mins",
                price: 599,
                image: "img/services/head-massage.jpg"
            }
        ]
    },

    {
        category: "Nail Care",
        icon: "fa-hand-sparkles",
        items: [
            {
                id: 14,
                name: "Manicure",
                description: "Luxury manicure treatment.",
                duration: "45 mins",
                price: 699,
                image: "img/services/manicure.jpg"
            },
            {
                id: 15,
                name: "Pedicure",
                description: "Premium foot care treatment.",
                duration: "60 mins",
                price: 899,
                image: "img/services/pedicure.jpg"
            }
        ]
    }

];


/*=========================================
        GLOBAL VARIABLES
=========================================*/

let selectedCategory = 0;
let cart = [];

const categoryList = document.getElementById("categoryList");
const serviceContainer = document.getElementById("serviceContainer");
const categoryTitle = document.getElementById("categoryTitle");
const serviceCount = document.getElementById("serviceCount");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const subtotal = document.getElementById("subtotal");
const gst = document.getElementById("gst");
const discount = document.getElementById("discount");
const grandTotal = document.getElementById("grandTotal");

const coupons = {
    "MIAMI10": 10,
    "WELCOME20": 20,
    "BEAUTY15": 15
};

let appliedCoupon = "";
let couponDiscount = 0;


/*=========================================================
        EVERYTHING THAT TOUCHES THE DOM RUNS AFTER
        THE PAGE HAS FULLY LOADED
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* ---------- initial page setup ---------- */
    renderCategories();
    renderServices(0);
    setupSearch();
    loadCart();

    /* ---------- coupon button ---------- */
    const couponBtn = document.querySelector(".coupon-box button");
    if (couponBtn) {
        couponBtn.addEventListener("click", applyCoupon);
    }

    /* ---------- checkout button (old flow, kept if present) ---------- */
    const checkoutBtn = document.getElementById("checkoutBtn");
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", function () {
            if (cart.length === 0) {
                showToast("Please select services first.", "error");
                return;
            }
            showToast("Redirecting to Checkout...", "success");
        });
    }

    /* =========================================================
            BOOKING MODAL - ELEMENTS
       ========================================================= */

    const openBookingModalBtn = document.getElementById("openBookingModalBtn");
    const bookingItems = document.getElementById("bookingItems");
    const summarySubtotal = document.getElementById("summarySubtotal");
    const summaryGST = document.getElementById("summaryGST");
    const summaryTotal = document.getElementById("summaryTotal");
    const customerName = document.getElementById("customerName");
    const customerMobile = document.getElementById("customerMobile");
    const appointmentDate = document.getElementById("appointmentDate");
    const appointmentTime = document.getElementById("appointmentTime");
    const bookingNotes = document.getElementById("bookingNotes");
    const sendBookingWhatsapp = document.getElementById("sendBookingWhatsapp");
    const bookingMessage = document.getElementById("bookingMessage");

    // Safety check - if the modal isn't on this page, skip all of this
    if (!openBookingModalBtn) return;

    // Today's date as the minimum selectable appointment date
    const today = new Date();
    appointmentDate.min = today.toISOString().split("T")[0];

    // Open Booking Modal
    openBookingModalBtn.addEventListener("click", function () {

        if (cart.length === 0) {
            alert("Please add at least one service.");
            return;
        }

        loadBookingSummary();

    });

    function loadBookingSummary() {

        bookingItems.innerHTML = "";

        let subtotalAmt = 0;

        cart.forEach(item => {

            subtotalAmt += item.price * item.qty;

            bookingItems.innerHTML += `
            <div class="booking-item">
                <div class="booking-item-left">
                    <img src="${item.image}" alt="">
                    <div>
                        <h6>${item.name}</h6>
                        <p>Qty : ${item.qty}</p>
                    </div>
                </div>
                <div class="booking-item-right">
                    <h5>₹${(item.price * item.qty).toLocaleString()}</h5>
                    <span>₹${item.price} Each</span>
                </div>
            </div>
            `;

        });

        const gstAmt = subtotalAmt * 0.18;
        const grand = subtotalAmt + gstAmt;

        summarySubtotal.innerHTML = "₹" + subtotalAmt.toFixed(2);
        summaryGST.innerHTML = "₹" + gstAmt.toFixed(2);
        summaryTotal.innerHTML = "₹" + grand.toFixed(2);

        bookingMessage.classList.remove("show");
        bookingMessage.innerHTML = "";

        validateBookingForm();

    }

    // Validation events
    customerName.addEventListener("input", validateBookingForm);
    customerMobile.addEventListener("input", validateBookingForm);
    appointmentDate.addEventListener("change", validateBookingForm);
    appointmentTime.addEventListener("change", validateBookingForm);

    function isValidMobile(number) {
        return /^[6-9]\d{9}$/.test(number);
    }

    function validateBookingForm() {

        const validName = customerName.value.trim().length >= 3;
        const validMobile = isValidMobile(customerMobile.value.trim());
        const validDate = appointmentDate.value !== "";
        const validTime = appointmentTime.value !== "";

        sendBookingWhatsapp.disabled =
            !(validName && validMobile && validDate && validTime);

    }

    // Send booking to WhatsApp
    sendBookingWhatsapp.addEventListener("click", sendBooking);

    function sendBooking() {

        const customer = customerName.value.trim();
        const mobile = customerMobile.value.trim();
        const date = appointmentDate.value;
        const time = appointmentTime.value;
        const notes = bookingNotes.value.trim();

        let subtotalAmt = 0;
        let servicesText = "";

        cart.forEach((item, index) => {

            const total = item.price * item.qty;
            subtotalAmt += total;

            servicesText +=
`${index + 1}. ${item.name}
   Qty : ${item.qty}
   Price : ₹${item.price}
   Total : ₹${total}

`;

        });

        const gstAmt = subtotalAmt * 0.18;
        const grand = subtotalAmt + gstAmt;

        const message =
`🌸 *MIAMI BEAUTY LOUNGE*
━━━━━━━━━━━━━━━━━━
📅 *NEW APPOINTMENT REQUEST*
━━━━━━━━━━━━━━━━━━
👤 *Customer Details*
Name : ${customer}
Mobile : ${mobile}
━━━━━━━━━━━━━━━━━━
💇 *Selected Services*
${servicesText}
━━━━━━━━━━━━━━━━━━
💰 *Payment Summary*
Subtotal : ₹${subtotalAmt.toFixed(2)}
GST (18%) : ₹${gstAmt.toFixed(2)}
Grand Total : ₹${grand.toFixed(2)}
━━━━━━━━━━━━━━━━━━
📆 Appointment Date
${date}
🕒 Appointment Time
${time}
━━━━━━━━━━━━━━━━━━
📝 Notes
${notes || "No Notes"}
━━━━━━━━━━━━━━━━━━
Thank You ❤️
Miami Beauty Lounge`;

        const salonWhatsapp = "919876543210";
        const url = `https://wa.me/${salonWhatsapp}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

        bookingMessage.classList.add("show");
        bookingMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <strong>Booking Created Successfully!</strong>
            <br><br>
            WhatsApp has been opened.
            Please click the <b>Send</b> button in WhatsApp
            to complete your booking.
        `;

        sendBookingWhatsapp.disabled = true;

        // Clear cart
        cart = [];
        renderCart();
        saveCart();

        // Reset form
        customerName.value = "";
        customerMobile.value = "";
        appointmentDate.value = "";
        appointmentTime.value = "";
        bookingNotes.value = "";
        bookingItems.innerHTML = "";
        summarySubtotal.innerHTML = "₹0.00";
        summaryGST.innerHTML = "₹0.00";
        summaryTotal.innerHTML = "₹0.00";

        // Close modal after a short delay
        setTimeout(function () {

            const modal = bootstrap.Modal.getInstance(
                document.getElementById("bookingModal")
            );

            if (modal) {
                modal.hide();
            }

            bookingMessage.classList.remove("show");
            bookingMessage.innerHTML = "";

        }, 3000);

    }

}); // end DOMContentLoaded


/*=========================================================
                CATEGORY LIST
=========================================================*/

function renderCategories() {

    categoryList.innerHTML = "";

    services.forEach((category, index) => {

        const li = document.createElement("li");

        if (index === 0) {
            li.classList.add("active");
        }

        li.innerHTML = `
            <a href="javascript:void(0)">
                <i class="fas ${category.icon}"></i>
                <span>${category.category}</span>
            </a>
        `;

        li.onclick = () => {

            document
                .querySelectorAll("#categoryList li")
                .forEach(x => x.classList.remove("active"));

            li.classList.add("active");
            selectedCategory = index;
            renderServices(index);

        };

        categoryList.appendChild(li);

    });

}


/*=========================================================
                SERVICE CARDS
=========================================================*/

function renderServices(index) {

    serviceContainer.innerHTML = "";

    const category = services[index];

    categoryTitle.innerHTML = category.category;
    serviceCount.innerHTML = `${category.items.length} Services`;

    category.items.forEach(service => {

        serviceContainer.innerHTML += `
        <div class="service-card">
            <div class="service-image">
                <img src="${service.image}" alt="${service.name}">
            </div>
            <div class="service-details">
                <div class="service-top">
                    <h4>${service.name}</h4>
                    <span class="price">₹${service.price}</span>
                </div>
                <p class="description">${service.description}</p>
                <div class="service-bottom">
                    <div class="duration">
                        <i class="far fa-clock"></i>
                        ${service.duration}
                    </div>
                    <button class="add-btn" onclick="addToCart(${service.id})">
                        <i class="fas fa-plus"></i>
                        Add
                    </button>
                </div>
            </div>
        </div>
        `;

    });

}


/*=========================================================
                    SEARCH
=========================================================*/

function setupSearch() {

    const search = document.getElementById("searchInput");
    if (!search) return;

    search.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase();
        const cards = document.querySelectorAll(".service-card");

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();
            card.style.display = text.includes(keyword) ? "flex" : "none";

        });

    });

}


/*=========================================
        FIND SERVICE
=========================================*/

function findService(id) {

    for (const category of services) {

        const service = category.items.find(x => x.id === id);
        if (service) return service;

    }

    return null;

}


/*=========================================
        ADD TO CART
=========================================*/

function addToCart(id) {

    const service = findService(id);
    if (!service) return;

    const existing = cart.find(x => x.id === id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            id: service.id,
            name: service.name,
            price: service.price,
            image: service.image,
            qty: 1
        });
    }

    renderCart();

}


/*=========================================
        RENDER CART
=========================================*/

function renderCart() {

    if (cart.length === 0) {

        cartItems.innerHTML = `
        <div class="empty-cart">
            <img src="img/empty-cart.png">
            <h5>No Services Added</h5>
            <p>Select beauty services to begin your booking.</p>
        </div>
        `;

        cartCount.innerHTML = "0 Services";
        updateSummary();
        return;

    }

    cartItems.innerHTML = "";

    cart.forEach(item => {

        cartItems.innerHTML += `
        <div class="cart-item">
            <div class="cart-left">
                <img src="${item.image}" alt="">
                <div>
                    <h5>${item.name}</h5>
                    <span>₹${item.price}</span>
                </div>
            </div>
            <div class="cart-right">
                <div class="qty-box">
                    <button onclick="decreaseQty(${item.id})">-</button>
                    <span>${item.qty}</span>
                    <button onclick="increaseQty(${item.id})">+</button>
                </div>
                <button class="remove-btn" onclick="removeItem(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
        `;

    });

    cartCount.innerHTML = `${cart.length} Services`;
    updateSummary();

}


/*=========================================
        INCREASE / DECREASE / REMOVE
=========================================*/

function increaseQty(id) {

    const item = cart.find(x => x.id === id);
    if (!item) return;

    item.qty++;
    renderCart();

}

function decreaseQty(id) {

    const item = cart.find(x => x.id === id);
    if (!item) return;

    item.qty--;

    if (item.qty <= 0) {
        cart = cart.filter(x => x.id !== id);
    }

    renderCart();

}

function removeItem(id) {

    cart = cart.filter(x => x.id !== id);
    renderCart();

}


/*=========================================
        UPDATE SUMMARY (single, merged version)
=========================================*/

function updateSummary() {

    let subtotalAmount = 0;

    cart.forEach(item => {
        subtotalAmount += item.price * item.qty;
    });

    let discountAmount = 0;

    // 10% automatic discount above ₹5000
    if (subtotalAmount >= 5000) {
        discountAmount += subtotalAmount * 0.10;
    }

    // coupon discount (stacks with the automatic discount)
    if (couponDiscount > 0) {
        discountAmount += subtotalAmount * (couponDiscount / 100);
    }

    let taxable = subtotalAmount - discountAmount;
    if (taxable < 0) taxable = 0;

    const gstAmount = taxable * 0.18;
    const grand = taxable + gstAmount;

    subtotal.innerHTML = "₹" + subtotalAmount.toLocaleString("en-IN");
    discount.innerHTML = "- ₹" + discountAmount.toFixed(0);
    gst.innerHTML = "₹" + gstAmount.toFixed(0);
    grandTotal.innerHTML = "₹" + grand.toFixed(0);

    saveCart();

}


/*=========================================
        TOTAL ITEMS
=========================================*/

function totalItems() {

    let total = 0;
    cart.forEach(item => { total += item.qty; });
    cartCount.innerHTML = total + " Service(s)";

}


/*=========================================
        APPLY COUPON
=========================================*/

function applyCoupon() {

    const input = document.querySelector(".coupon-box input");
    const code = input.value.trim().toUpperCase();

    if (code === "") {
        showToast("Enter Coupon Code", "error");
        return;
    }

    if (coupons[code]) {

        appliedCoupon = code;
        couponDiscount = coupons[code];
        updateSummary();
        showToast(`${code} Applied Successfully`, "success");

    } else {

        showToast("Invalid Coupon Code", "error");

    }

}


/*=========================================
        LOCAL STORAGE
=========================================*/

function saveCart() {
    localStorage.setItem("miamiCart", JSON.stringify(cart));
}

function loadCart() {

    const data = localStorage.getItem("miamiCart");

    if (data) {
        cart = JSON.parse(data);
        renderCart();
    }

}


/*=========================================
        CLEAR CART
=========================================*/

function clearCart() {

    cart = [];
    renderCart();
    saveCart();

}


/*=========================================
        TOAST
=========================================*/

function showToast(message, type) {

    const toast = document.createElement("div");
    toast.className = "booking-toast " + type;

    toast.innerHTML = `
        <i class="fas ${type === "success" ? "fa-check-circle" : "fa-times-circle"}"></i>
        ${message}
    `;

    document.body.appendChild(toast);

    setTimeout(() => { toast.classList.add("show"); }, 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => { toast.remove(); }, 300);
    }, 2500);

}