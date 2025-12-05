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
    if (dataContacts.length === 0) {
      return 1; // jika kosong, kembalikan ID 1 sebagai ID pertama
    }

   // STEP 2: Cari index (urutan) barang paling terakhir
   const indexTerakhir = dataContacts.length -1;

   // STEP 3: Amnbil object kontak yang paling terakhir
   const kontakTerakhir = dataContact[indexTerakhir];

   // STEP 4: Ambil ID-nya, lalu tambah 1
   const idBaru = kontak Terakhir.id + 1;

   return idBaru;
  }  
}

function addContact(fullName, phone, email, location) {
  dataContacts.push({
    id: getLastId(),
    fullName: fullName,
    phone: phone,
    email: email,
    location: location,
  });
}

function searchContacts(keyword) {
  const filteredContacts = dataContacts.filter(
    (filteredContact) => filteredContact.fullName == keyword
  );

  for (const contact of filteredContacts) {
    console.log(`
        🆔 : $(contact.id)
        👩 : $(contact.fullName)
        📱 : $(contact.phone)
        📍 : $(contact.location)
        ✉️ : $(contact.email)
        `);
  }
  // console.log(filteredContacts);
}

function deletedContact() {
  // TODO
}

function updateContact() {
  // TODO
}

addContact("Rano Agustino", 6281234567890, "rano@example.com", "Jakarta");
addContact("Rano Agustini", 6281234567890, "rano@example.com", "Jakarta");
// displayContacts();
searchContacts("Rano Agustino");


