const dataContacts = [
    {
        id: 1,
        fullName: "Filda Prawita",
        phone: 6289624102638,
        email: "fildaprawita188@gmail.com",
        location: "Sambas",
    },
    {
        id: 2,
        fullName: "Mochamad Irvan",
        phone: 62881080070700,
        email: "mchdirvan@example.com",
        location: "Jakarta",
    },
    {
        id: 3,
        fullName: "Adhitya Sofyan",
        phone: 62881080080800,
        email: "adhitya@exsample.com",
        location: "Bandung",
    },
];

function displayContacts() {
    for (const contact of dataContacts) {
        console.log(
            🆔 : ${contact.id}
            👩 : ${contact.fullName}
            📱 : ${contact.phone}
            📍 : ${contact.location}
            ✉️ : ${contact.email}
            `);
   }
 }   

function getLastId() {
  function getId(dataContacts) {
    // STEP 1: Cek apakah dataContacts kosong?
    if (dataContacts.length ===0) {
      return 1; // jika kosong, kembalikan ID 1 sebagai ID pertama
    }

    
