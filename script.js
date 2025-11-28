document.addEventListener("DOMContentLoaded", function () {
  // Données de tarification
  const pricing = {
    massages: {
      title: "Mes Massages",
      items: [
        {
          name: "Massage Dos et Nuque",
          options: [{ duration: "30mn", price: 45 }]
        },
        {
          name: "Massage Californien",
          options: [
            { duration: "1h", price: 90 },
            { duration: "1h30", price: 120 }
          ]
        },
        {
          name: "Massage Suédois",
          options: [
            { duration: "1h", price: 90 },
            { duration: "1h30", price: 120 }
          ]
        },
        { name: "Massage Lomi-Lomi", options: [{ duration: "1h", price: 95 }] }
      ]
    },
    visage: {
      title: "Le Visage",
      items: [
        {
          name: "Soin visage « belle peau »",
          options: [{ duration: "1h", price: 90 }]
        },
        {
          name: "Soin liftant anti-âge techniques naturelles",
          options: [{ duration: "1h", price: 90 }]
        }
      ]
    },
    mains: {
      title: "Les Mains",
      items: [
        {
          name: "Soin + semi-permanent",
          options: [{ duration: "45mn", price: 50 }]
        },
        {
          name: "Soin + Vernis Classique",
          options: [{ duration: "45mn", price: 40 }]
        },
        {
          name: "Soin Detox Japonais sans vernis",
          options: [{ duration: "45mn", price: 45 }]
        },
        {
          name: "Supplément massage des mains et avant bras",
          options: [{ duration: "10mn", price: 18 }]
        }
      ]
    },
    pieds: {
      title: "Les Pieds",
      items: [
        {
          name: "Soin + vernis semi permanent",
          options: [{ duration: "60mn", price: 60 }]
        },
        {
          name: "Soin + vernis classique",
          options: [{ duration: "45mn", price: 50 }]
        },
        {
          name: "Soin Detox Japonais sans vernis",
          options: [{ duration: "60mn", price: 55 }]
        },
        {
          name: "Dépose semi permanent*",
          options: [{ duration: "-", price: 10 }]
        },
        { name: "Supplément French", options: [{ duration: "-", price: 10 }] }
      ],
      note: "* Offert si la pose de Semi a été réalisée par mes soins"
    },
    forfaits: {
      title: "Les Forfaits Mains & Pieds",
      items: [
        {
          name: "Soin + vernis classique",
          options: [{ duration: "90mn", price: 80 }]
        },
        {
          name: "Soin + semi Permanent",
          options: [{ duration: "90mn", price: 96 }]
        },
        {
          name: "Soin + Mix vernis classique et vernis semi P",
          options: [{ duration: "90mn", price: 90 }]
        },
        {
          name: "Soin express + vernis",
          options: [{ duration: "60mn", price: 70 }]
        },
        {
          name: "Detox soin Japonais sans vernis",
          options: [{ duration: "90mn", price: 95 }]
        }
      ]
    }
  };

// Données des services
const services = {
  californien: {
    title: "Massage Californien : Partant d'effleurages doux, enveloppants et relaxants, les manœuvres s'enchaînent et s'intensifient pour soulager les tensions plus profondes.",
    content: "",
    duration: "Durée : 1h (90€) / 1h30 (120€)"
  },
  suedois: {
    title: "Massage Suédois : À la fois relaxant et revitalisant, le massage suédois permet de cibler les zones de tension du corps. Il offre une détente musculaire profonde et stimule les capacités d'autorégulation du corps.",
    content: "",
    duration: "Durée : 1h (90€) / 1h30 (120€)"
  },
  lomiLomi: {
    title: "Massage Lomi Lomi : D'origine hawaïenne, ce massage apaisant est réalisé avec les avant-bras. Il produit des mouvements fluides et rythmés, évoquant les vagues puissantes de l'océan.",
    content: "",
    duration: "Durée : 1h (95€)"
  },
  detox: {
    title: "Soin Ongles Détox Japonais : Soin réparateur pour les ongles, traitement naturel qui scelle la kératine de l'ongle. Ongles plus forts, protégés, limitant le dédoublement. Rendu brillant grâce au lustrage réalisé avec de la cire d'abeille. Soin sans pose de vernis, recommandé après une dépose de semi-permanent.",
    content: "",
    duration: "Durée : 45 min (55€)"
  },
  dosNuque: {
    title: "Massage Dos et Nuque : Soulagement ciblé à domicile",
    content: "",
    duration: "Durée : 30 min (45€)"
  },
  visageBellePeau: {
    title: "Soin Visage « Belle Peau » : Ce soin se concentre sur les zones nécessitant un travail approfondi, offrant à la peau un éclat de jeunesse, revivifiant et apaisant. Gommage, masque, massage facial.",
    content: "",
    duration: "Durée : 1h (90€)"
  },
  liftantAntiAge: {
    title: "Soin Liftant Anti-Âge : Ce soin raffermit et définit les contours du visage, comble et lisse les rides, et apporte un aspect plus lifté et sculpté. Il associe des produits professionnels performants à des techniques de massage 100% naturelles incluant des glissés profonds.",
    content: "",
    duration: "Durée : 1h (90€)"
  },
  semiPermanent: {
    title: "Soin + Semi-Permanent : Limage, manucure, soin, pose de vernis semi-permanent.",
    content: "",
    duration: "Durée : 45 min (50€)"
  }
};


  // Sélecteurs DOM centralisés
  const elements = {
    serviceGrid: document.querySelector(".service-grid"),
    pricingGrid: document.querySelector(".pricing-grid"),
    modal: document.getElementById("modal"),
    modalTitle: document.getElementById("modal-title"),
    modalContent: document.getElementById("modal-description"),
    modalDuration: document.getElementById("modal-duration"),
    closeBtn: document.querySelector(".close"),
    dateInput: document.getElementById("date"),
    timeSlotsContainer: document.getElementById("timeSlots"),
    categorySelect: document.getElementById("category"),
    serviceSelect: document.getElementById("service"),
    optionSelect: document.getElementById("option"),
    reservationForm: document.getElementById("reservation-form"),
    nameInput: document.getElementById("name"),
    phoneInput: document.getElementById("phone"),
    addressInput: document.getElementById("address"),
    infoRequestInput: document.getElementById("infoRequest"),
    loader: document.getElementById("loader")
  };

  function init() {
    loadServices();
    loadPricing();
    setupModal();
    initReservationSystem();
    setupEventListeners();
    handleLoader();
    lazyLoadImages();
    handleNetworkError();
    setupImageCache();
    setupSmoothAnimations();
  }

  function setupEventListeners() {
    // Navigation fluide
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Gestion des événements d'orientation
    window.addEventListener("orientationchange", () => {
      setTimeout(() => {
        window.scrollTo(0, window.scrollY);
      }, 100);
    });

    // Configuration du lien témoignages
    setupTestimonialsLink();

    // Configuration du tracking téléphone
    setupPhoneTracking();
  }

  // Gestion du loader
  function handleLoader() {
    if (elements.loader) {
      window.addEventListener("load", () => {
        elements.loader.classList.add("hidden");
        setTimeout(() => {
          elements.loader.style.display = "none";
        }, 300);
      });
    }
  }

  // Chargement des services
  function loadServices() {
    if (elements.serviceGrid) {
      Object.entries(services).forEach(([key, service]) => {
        const serviceElement = document.createElement("div");
        serviceElement.className = "service";
        serviceElement.innerHTML = `
          <h3>${service.title.split(":")[0]}</h3>
          <p>${service.title.split(":")[1] || ""}</p>
          <button class="read-more" data-service="${key}">En savoir plus</button>
        `;
        elements.serviceGrid.appendChild(serviceElement);
      });
    }
  }

  // Chargement des tarifs
  function loadPricing() {
    if (elements.pricingGrid) {
      let pricingHTML = "";
      for (const category in pricing) {
        pricingHTML += `
          <div class="pricing-category">
            <h3>${pricing[category].title}</h3>
            <table class="pricing-table">
              <thead>
                <tr>
                  <th class="service-column">Service</th>
                  <th class="duration-column">Durée</th>
                  <th class="price-column">Tarif</th>
                </tr>
              </thead>
              <tbody>
                ${pricing[category].items
                  .flatMap((item) =>
                    item.options.map(
                      (option) => `
                        <tr>
                          <td class="service-column">${item.name}</td>
                          <td class="duration-column">${option.duration}</td>
                          <td class="price-column">${option.price}€</td>
                        </tr>
                      `
                    )
                  )
                  .join("")}
              </tbody>
            </table>
            ${
              pricing[category].note
                ? `<p class="pricing-note">${pricing[category].note}</p>`
                : ""
            }
          </div>
        `;
      }
      elements.pricingGrid.innerHTML = pricingHTML;
    }
  }

  // Configuration de la modal
  function setupModal() {
    const {
      modal,
      modalTitle,
      modalContent,
      modalDuration,
      closeBtn
    } = elements;

    if (modal && modalTitle && modalContent && modalDuration && closeBtn) {
      document.addEventListener("click", function (e) {
        if (e.target.classList.contains("read-more")) {
          const serviceKey = e.target.getAttribute("data-service");
          const service = services[serviceKey];
          modalTitle.textContent = service.title;
          modalContent.innerHTML = service.content || "Plus d'informations à venir.";
          modalDuration.textContent = service.duration;
          modal.style.display = "block";
          modalContent.scrollTop = 0;
        }
      });

      closeBtn.onclick = () => (modal.style.display = "none");
      window.onclick = (event) => {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      };
    }
  }

  // Système de réservation
  function initReservationSystem() {
    populateCategories();
    if (elements.dateInput) {
      elements.dateInput.addEventListener("change", function() {
        if (validateDate(this.value)) {
          fetchTimeSlots();
        }
      });
    }
    if (elements.categorySelect) {
      elements.categorySelect.addEventListener("change", populateServices);
    }
    if (elements.serviceSelect) {
      elements.serviceSelect.addEventListener("change", populateOptions);
    }
    if (elements.reservationForm) {
      elements.reservationForm.addEventListener(
        "submit",
        handleReservationSubmit
      );
    }
  }

  // Remplissage des catégories
  function populateCategories() {
    if (elements.categorySelect) {
      elements.categorySelect.innerHTML =
        '<option value="">Choisissez une catégorie</option>';
      for (const [key, category] of Object.entries(pricing)) {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = category.title;
        elements.categorySelect.appendChild(option);
      }
    }
  }

  // Récupération des créneaux horaires
  async function fetchTimeSlots() {
    const availableSlots = [
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00"
    ];
    const slots = availableSlots.filter(() => Math.random() > 0.5);
    displayTimeSlots(slots);
  }

  // Affichage des créneaux horaires
  function displayTimeSlots(slots) {
    if (elements.timeSlotsContainer) {
      elements.timeSlotsContainer.innerHTML = "";
      slots.forEach((slot) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = slot;
        button.addEventListener("click", () => selectTimeSlot(button));
        elements.timeSlotsContainer.appendChild(button);
      });
    }
  }

  // Sélection d'un créneau horaire
  function selectTimeSlot(selectedButton) {
    const buttons = elements.timeSlotsContainer.querySelectorAll("button");
    buttons.forEach((button) => button.classList.remove("selected"));
    selectedButton.classList.add("selected");
  }

  // Population des services
  function populateServices() {
    if (elements.serviceSelect && elements.optionSelect) {
      const category = elements.categorySelect.value;
      elements.serviceSelect.innerHTML =
        '<option value="">Choisissez un service</option>';
      elements.optionSelect.innerHTML =
        '<option value="">Choisissez une option</option>';

      if (category && pricing[category]) {
        pricing[category].items.forEach((item) => {
          const option = document.createElement("option");
          option.value = item.name;
          option.textContent = item.name;
          elements.serviceSelect.appendChild(option);
        });
      }
    }
  }

  // Population des options
  function populateOptions() {
    if (elements.optionSelect) {
      const category = elements.categorySelect.value;
      const serviceName = elements.serviceSelect.value;
      elements.optionSelect.innerHTML =
        '<option value="">Choisissez une option</option>';

      if (category && serviceName && pricing[category]) {
        const service = pricing[category].items.find(
          (item) => item.name === serviceName
        );
        if (service) {
          service.options.forEach((option) => {
            const optionElement = document.createElement("option");
            optionElement.value = `${option.duration}-${option.price}`;
            optionElement.textContent = `${option.duration} - ${option.price}€`;
            elements.optionSelect.appendChild(optionElement);
          });
        }
      }
    }
  }

  // Gestion de la soumission du formulaire
  function handleReservationSubmit(event) {
    event.preventDefault();

    const selectedTimeSlot = elements.timeSlotsContainer.querySelector(".selected");
    const selectedTime = selectedTimeSlot ? selectedTimeSlot.textContent.trim() : "";

    const formData = {
      date: elements.dateInput.value,
      time: selectedTime,
      category: elements.categorySelect.options[elements.categorySelect.selectedIndex].text,
      service: elements.serviceSelect.value,
      option: elements.optionSelect.value,
      name: elements.nameInput.value,
      phone: elements.phoneInput.value,
      address: elements.addressInput.value,
      infoRequest: elements.infoRequestInput.value
    };

    if (validateFormData(formData)) {
      const [duration, price] = formData.option.split("-");
      showConfirmation(formData, duration, price);
      sendReservationToBackend(formData, duration, price);
    } else {
      alert("Veuillez remplir tous les champs obligatoires pour finaliser la réservation.");
    }
  }

  // Validation des données du formulaire
  function validateFormData(formData) {
    return (
      formData.date &&
      formData.time &&
      formData.category &&
      formData.service &&
      formData.option &&
      formData.name &&
      formData.phone &&
      formData.address
    );
  }

  // Affichage de la confirmation
  function showConfirmation(formData, duration, price) {
    let message = `Réservation confirmée pour ${formData.name}\n`;
    message += `Service: ${formData.service} (${duration})\n`;
    message += `Date: ${formData.date} à ${formData.time}\n`;
    message += `Prix: ${price}€\n`;
    message += `Téléphone: ${formData.phone}\n`;
    message += `Adresse: ${formData.address}\n`;
    if (formData.infoRequest) {
      message += `Informations supplémentaires: ${formData.infoRequest}\n`;
    }
    alert(message);
  }

  // Envoi des données au backend
  function sendReservationToBackend(formData, duration, price) {
    const data = {
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      date: formData.date,
      time: formData.time,
      category: formData.category,
      service: formData.service,
      option: formData.option,
      infoRequest: formData.infoRequest
    };

    fetch("sendmail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(data)
    })
      .then(response => response.text())
      .then(result => {
        if (result.trim() === "success") {
          console.log("✅ Email de réservation envoyé avec succès !");
        } else {
          console.error("❌ Erreur lors de l'envoi de l'email de réservation.");
        }
      })
      .catch(error => {
        console.error("Erreur réseau :", error);
      });
  }

  // Fonctions utilitaires
  function setupTestimonialsLink() {
    const testimonialsLink = document.getElementById("temoignages-link");
    if (testimonialsLink) {
      testimonialsLink.addEventListener("click", function (e) {
        e.preventDefault();
        window.open("https://codepen.io/psy-byte/pen/VwozoqV", "_blank");
      });
    }
  }

  function setupPhoneTracking() {
    const phoneLink = document.querySelector(".contact-info a");
    if (phoneLink) {
      phoneLink.addEventListener("click", () => {
        console.log("Numéro de téléphone cliqué");
      });
    }
  }

  function lazyLoadImages() {
    const images = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }

  // Validation des dates
  function validateDate(date) {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Vérifier si la date est dans le futur
    if (selectedDate < today) {
      alert("Veuillez sélectionner une date future");
      return false;
    }

    // Vérifier si la date n'est pas trop éloignée (ex: max 3 mois)
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    if (selectedDate > maxDate) {
      alert("Les réservations sont limitées à 3 mois à l'avance");
      return false;
    }

    return true;
  }

  // Gestion des erreurs réseau
  function handleNetworkError() {
    window.addEventListener("offline", () => {
      showNotification(
        "Vous êtes hors ligne. Certaines fonctionnalités peuvent être limitées.",
        "error"
      );
    });

    window.addEventListener("online", () => {
      showNotification("Connexion rétablie !", "success");
    });
  }

  // Système de notification
  function showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add("fade-out");
      setTimeout(() => notification.remove(), 300);
    }, 5000);
  }

  // Gestion améliorée du cache des images
  function setupImageCache() {
    // Préchargement des images critiques
    const criticalImages = [
      "https://github.com/psy-byte/IC-V3/blob/main/dark.jpg?raw=true"
    ];

    if ("caches" in window) {
      caches.open("image-cache").then((cache) => {
        cache.addAll(criticalImages);
      });
    }
  }

  // Animations fluides
  function setupSmoothAnimations() {
    const animatedElements = document.querySelectorAll(
      ".service, .pricing-category"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    animatedElements.forEach((el) => observer.observe(el));
  }

  // Initialisation
  init();
});