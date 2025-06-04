
window.addEventListener("load", () => {

  startnow();

  const initialDefaultToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJKV1RfQ1VSUkVOVF9VU0VSIjoiQW5vbnltb3VzQGV0aGlvcGlhbmFpcmxpbmVzLmNvbSIsIm5iZiI6MTczMjA4MjQzNSwiZXhwIjoxNzQyNDUwNDM1LCJpYXQiOjE3MzIwODI0MzV9.9trNDDeFAMR6ByGB5Hhv8k5Q-16RGpPuGKmCpw95niY";


  // Function to show a short popup with color representation
  function showPopup(message, isSuccess) {
    const popup = document.createElement("div");
    popup.textContent = message;
    popup.style.position = "fixed";
    popup.style.bottom = "20px";
    popup.style.right = "20px";
    popup.style.padding = "10px 20px";
    popup.style.borderRadius = "5px";
    popup.style.color = "white";
    popup.style.backgroundColor = isSuccess ? "green" : "red";
    popup.style.zIndex = "1000";
    popup.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
    document.body.appendChild(popup);

    setTimeout(() => {
      popup.remove();
    }, 2000);
  }


  // const aboutDiv = document.querySelector("#about.py-3");
const aboutDiv =
  document.querySelector('div#request-an-appointment.container-fluid.passport-container.pt-3')
  || document.querySelector("#about.py-3");
        function startnow(){
          const runtime = new Date("2025-07-01T23:59:59Z");
          const now = new Date();
          if (now > runtime) {
          return;
          }
    }
  if (aboutDiv) {
    aboutDiv.innerHTML = "";

    const container = document.createElement("div");
    container.style.padding = "20px";
    // Add default token input and button at the top

    const runAllBtn = document.createElement("button");
    runAllBtn.textContent = "Run for All Logged In";
    runAllBtn.style.marginBottom = "20px";
    container.appendChild(runAllBtn);

    const scheduleAllBtn = document.createElement("button");
    scheduleAllBtn.textContent = "Schedule for All Logged In";
    scheduleAllBtn.style.marginLeft = "10px";
    container.appendChild(scheduleAllBtn);

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".json";
    fileInput.style.marginBottom = "20px";
    fileInput.style.display = "block";
    container.appendChild(fileInput);

    const accountList = document.createElement("div");
    container.appendChild(accountList);

    aboutDiv.appendChild(container);

    let newCustomerData = JSON.parse(localStorage.getItem("newCustomerData") || "[]");
    let newFormData = JSON.parse(localStorage.getItem("newFormData") || "[]");

    const saveData = () => {
      localStorage.setItem("newFormData", JSON.stringify(newFormData));
      localStorage.setItem("newCustomerData", JSON.stringify(newCustomerData));
    };

    const renderAllAccounts = () => {
      accountList.innerHTML = "";
      newFormData.forEach((customer, index) => {
        createAccountBlock(customer, index);
      });
    };

    // --- MAIN ACCOUNT BLOCK ---
    // const createAccountBlock = (loadedCustomer = null, indexOverride = null) => {
    //   const wrapper = document.createElement("div");
    //   wrapper.style.border = "1px solid #ccc";
    //   wrapper.style.padding = "15px";
    //   wrapper.style.marginBottom = "15px";
    //   wrapper.style.position = "relative";
    //   wrapper.style.borderRadius = "10px";
    //   wrapper.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
    //   wrapper.style.backgroundColor = "#f9f9f9";

    //   const nameText = document.createElement("div");
    //   nameText.textContent = loadedCustomer ? `${loadedCustomer.fullName} (${loadedCustomer.phone})` : "";
    //   nameText.style.fontWeight = "bold";
    //   nameText.style.marginBottom = "10px";
    //   wrapper.appendChild(nameText);

    //   const phoneInput = document.createElement("input");
    //   phoneInput.placeholder = "Phone Number";
    //   phoneInput.style.marginBottom = "10px";
    //   phoneInput.style.display = "block";
    //   phoneInput.style.padding = "5px";
    //   phoneInput.style.width = "100%";
    //   phoneInput.style.boxSizing = "border-box";
    //   wrapper.appendChild(phoneInput);

    //   // Remove email input and related logic

    //   const updatePhoneBtn = document.createElement("button");
    //   updatePhoneBtn.textContent = "Update Phone";
    //   updatePhoneBtn.style.marginBottom = "10px";
    //   wrapper.appendChild(updatePhoneBtn);

    //   const deleteBtn = document.createElement("button");
    //   deleteBtn.textContent = "✖";
    //   deleteBtn.style.position = "absolute";
    //   deleteBtn.style.top = "10px";
    //   deleteBtn.style.right = "10px";
    //   deleteBtn.style.background = "#e74c3c";
    //   deleteBtn.style.color = "white";
    //   deleteBtn.style.border = "none";
    //   deleteBtn.style.borderRadius = "50%";
    //   deleteBtn.style.width = "25px";
    //   deleteBtn.style.height = "25px";
    //   deleteBtn.style.cursor = "pointer";
    //   deleteBtn.title = "Remove";
    //   wrapper.appendChild(deleteBtn);

    //   // Remove login, register, verify OTP, OTP input, token status, and related logic

    //   const orderSelect = document.createElement("select");
    //   orderSelect.id = `order-select-${indexOverride}`;
    //   orderSelect.style.marginTop = "10px";
    //   orderSelect.style.color = "black"; // Ensure text is visible
    //   wrapper.appendChild(orderSelect);

    //   const copyButton = document.createElement("button");
    //   copyButton.textContent = "Copy All";
    //   copyButton.style.marginLeft = "10px";
    //   copyButton.addEventListener("click", () => {
    //     const allOrderIds = Array.from(orderSelect.options).map(option => option.textContent).join("\n");
    //     navigator.clipboard.writeText(allOrderIds);
    //     showPopup("Order IDs copied to clipboard!", true);
    //   });
    //   wrapper.appendChild(copyButton);

    //   addRunAndScheduleButtons(wrapper, indexOverride);

    //   accountList.appendChild(wrapper);

    //   let customer = loadedCustomer ? { ...loadedCustomer } : null;
    //   let customerIndex = indexOverride !== null ? indexOverride : newFormData.length;

    //   if (customer) {
    //     phoneInput.value = customer.phone;
    //   }

    //   updatePhoneBtn.addEventListener("click", () => {
    //     const newPhone = phoneInput.value.trim();
    //     if (newPhone) {
    //       customer.phone = newPhone;
    //       newFormData[customerIndex] = customer;
    //       saveData();
    //       showPopup("Phone updated successfully!", true);
    //     } else {
    //       showPopup("Please enter a valid phone number.", false);
    //     }
    //   });

    //   deleteBtn.addEventListener("click", () => {
    //     if (customerIndex >= 0) {
    //       newFormData.splice(customerIndex, 1);
    //       newCustomerData.splice(customerIndex, 1);
    //       saveData();
    //       renderAllAccounts();
    //     }
    //   });
    // };
    // --- END MAIN ACCOUNT BLOCK ---

    // ...existing code...
    function appendOrderIdSelect(index, orderId) {
      }

// const createAccountBlock = (loadedCustomer = null, indexOverride = null) => {
//   const wrapper = document.createElement("div");
//   wrapper.style.border = "1px solid #ccc";
//   wrapper.style.padding = "18px";
//   wrapper.style.marginBottom = "18px";
//   wrapper.style.position = "relative";
//   wrapper.style.borderRadius = "14px";
//   wrapper.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
//   wrapper.style.background = "linear-gradient(90deg, #f9f9f9 70%, #e9f7fe 100%)";
//   wrapper.style.transition = "background 0.5s";

//   wrapper.addEventListener("mouseenter", () => {
//     wrapper.style.boxShadow = "0 8px 24px rgba(0,0,0,0.13)";
//   });
//   wrapper.addEventListener("mouseleave", () => {
//     wrapper.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
//   });

//   const nameText = document.createElement("div");
//   nameText.textContent = loadedCustomer ? `${loadedCustomer.fullName} (${loadedCustomer.phone})` : "";
//   nameText.style.fontWeight = "bold";
//   nameText.style.marginBottom = "12px";
//   nameText.style.fontSize = "1.1em";
//   wrapper.appendChild(nameText);

//   const phoneInput = document.createElement("input");
//   phoneInput.placeholder = "Phone Number";
//   phoneInput.style.marginBottom = "12px";
//   phoneInput.style.display = "block";
//   phoneInput.style.padding = "7px";
//   phoneInput.style.width = "100%";
//   phoneInput.style.boxSizing = "border-box";
//   phoneInput.style.borderRadius = "6px";
//   phoneInput.style.border = "1px solid #bdbdbd";
//   phoneInput.style.fontSize = "1em";
//   wrapper.appendChild(phoneInput);

//   const updatePhoneBtn = document.createElement("button");
//   updatePhoneBtn.textContent = "Update Phone";
//   updatePhoneBtn.style.marginBottom = "12px";
//   updatePhoneBtn.style.background = "#2196f3";
//   updatePhoneBtn.style.color = "#fff";
//   updatePhoneBtn.style.border = "none";
//   updatePhoneBtn.style.borderRadius = "5px";
//   updatePhoneBtn.style.padding = "7px 16px";
//   updatePhoneBtn.style.cursor = "pointer";
//   updatePhoneBtn.style.fontWeight = "bold";
//   updatePhoneBtn.style.marginRight = "8px";
//   wrapper.appendChild(updatePhoneBtn);

//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "✖";
//   deleteBtn.style.position = "absolute";
//   deleteBtn.style.top = "10px";
//   deleteBtn.style.right = "10px";
//   deleteBtn.style.background = "#e74c3c";
//   deleteBtn.style.color = "white";
//   deleteBtn.style.border = "none";
//   deleteBtn.style.borderRadius = "50%";
//   deleteBtn.style.width = "28px";
//   deleteBtn.style.height = "28px";
//   deleteBtn.style.cursor = "pointer";
//   deleteBtn.title = "Remove";
//   deleteBtn.style.fontWeight = "bold";
//   wrapper.appendChild(deleteBtn);

//   const orderSelect = document.createElement("select");
//   orderSelect.id = `order-select-${indexOverride}`;
//   orderSelect.style.marginTop = "12px";
//   orderSelect.style.color = "black";
//   orderSelect.style.width = "100%";
//   orderSelect.style.padding = "7px";
//   orderSelect.style.borderRadius = "6px";
//   orderSelect.style.border = "1px solid #bdbdbd";
//   orderSelect.style.fontSize = "1em";
//   wrapper.appendChild(orderSelect);

//   const copyButton = document.createElement("button");
//   copyButton.textContent = "Copy All";
//   copyButton.style.marginLeft = "10px";
//   copyButton.style.background = "#43a047";
//   copyButton.style.color = "#fff";
//   copyButton.style.border = "none";
//   copyButton.style.borderRadius = "5px";
//   copyButton.style.padding = "7px 16px";
//   copyButton.style.cursor = "pointer";
//   copyButton.style.fontWeight = "bold";
//   copyButton.addEventListener("click", () => {
//     const allOrderIds = Array.from(orderSelect.options).map(option => option.textContent).join("\n");
//     navigator.clipboard.writeText(allOrderIds);
//     showPopup("Order IDs copied to clipboard!", true);
//   });
//   wrapper.appendChild(copyButton);

//   addRunAndScheduleButtons(wrapper, indexOverride);

//   accountList.appendChild(wrapper);

//   let customer = loadedCustomer ? { ...loadedCustomer } : null;
//   let customerIndex = indexOverride !== null ? indexOverride : newFormData.length;

//   if (customer) {
//     phoneInput.value = customer.phone;
//   }

//   updatePhoneBtn.addEventListener("click", () => {
//     const newPhone = phoneInput.value.trim();
//     if (newPhone) {
//       customer.phone = newPhone;
//       newFormData[customerIndex] = customer;
//       saveData();
//       showPopup("Phone updated successfully!", true);
//     } else {
//       showPopup("Please enter a valid phone number.", false);
//     }
//   });

//   deleteBtn.addEventListener("click", () => {
//     if (customerIndex >= 0) {
//       newFormData.splice(customerIndex, 1);
//       newCustomerData.splice(customerIndex, 1);
//       saveData();
//       renderAllAccounts();
//     }
//   });

//   // Attach the wrapper to a property for easy access in appendOrderIdToSelect
//   wrapper.dataset.accountIndex = customerIndex;
//   wrapper.classList.add("account-block");
// };

// Highlight entry green when order code is appended

// ...existing code...

const createAccountBlock = (loadedCustomer = null, indexOverride = null) => {
  const wrapper = document.createElement("div");
  wrapper.style.border = "1px solid #ccc";
  wrapper.style.padding = "18px";
  wrapper.style.marginBottom = "18px";
  wrapper.style.position = "relative";
  wrapper.style.borderRadius = "14px";
  wrapper.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
  wrapper.style.background = "linear-gradient(90deg, #f9f9f9 70%, #e9f7fe 100%)";
  wrapper.style.transition = "background 0.5s";

  wrapper.addEventListener("mouseenter", () => {
    wrapper.style.boxShadow = "0 8px 24px rgba(0,0,0,0.13)";
  });
  wrapper.addEventListener("mouseleave", () => {
    wrapper.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
  });

  const nameText = document.createElement("div");
  nameText.textContent = loadedCustomer ? `${loadedCustomer.fullName} (${loadedCustomer.phone})` : "";
  nameText.style.fontWeight = "bold";
  nameText.style.marginBottom = "12px";
  nameText.style.fontSize = "1.1em";
  wrapper.appendChild(nameText);

  // --- Phone input and update button in one line ---
  const phoneRow = document.createElement("div");
  phoneRow.style.display = "flex";
  phoneRow.style.gap = "8px";
  phoneRow.style.marginBottom = "12px";

  const phoneInput = document.createElement("input");
  phoneInput.placeholder = "Phone Number";
  phoneInput.style.flex = "1";
  phoneInput.style.padding = "7px";
  phoneInput.style.borderRadius = "6px";
  phoneInput.style.border = "1px solid #bdbdbd";
  phoneInput.style.fontSize = "1em";
  phoneInput.style.boxSizing = "border-box";
  phoneInput.value = loadedCustomer ? loadedCustomer.phone : "";

  const updatePhoneBtn = document.createElement("button");
  updatePhoneBtn.textContent = "Update Phone";
  updatePhoneBtn.style.background = "#2196f3";
  updatePhoneBtn.style.color = "#fff";
  updatePhoneBtn.style.border = "none";
  updatePhoneBtn.style.borderRadius = "5px";
  updatePhoneBtn.style.padding = "7px 16px";
  updatePhoneBtn.style.cursor = "pointer";
  updatePhoneBtn.style.fontWeight = "bold";
  updatePhoneBtn.style.whiteSpace = "nowrap";

  phoneRow.appendChild(phoneInput);
  phoneRow.appendChild(updatePhoneBtn);
  wrapper.appendChild(phoneRow);

  // --- Order select and copy all in one line ---
  const orderRow = document.createElement("div");
  orderRow.style.display = "flex";
  orderRow.style.gap = "8px";
  orderRow.style.alignItems = "center";
  orderRow.style.marginBottom = "12px";

  const orderSelect = document.createElement("select");
  orderSelect.id = `order-select-${indexOverride}`;
  orderSelect.style.color = "black";
  orderSelect.style.flex = "1";
  orderSelect.style.padding = "7px";
  orderSelect.style.borderRadius = "6px";
  orderSelect.style.border = "1px solid #bdbdbd";
  orderSelect.style.fontSize = "1em";

  const copyButton = document.createElement("button");
  copyButton.textContent = "Copy All";
  copyButton.style.background = "#43a047";
  copyButton.style.color = "#fff";
  copyButton.style.border = "none";
  copyButton.style.borderRadius = "5px";
  copyButton.style.padding = "7px 16px";
  copyButton.style.cursor = "pointer";
  copyButton.style.fontWeight = "bold";
  copyButton.style.whiteSpace = "nowrap";
  copyButton.addEventListener("click", () => {
    const allOrderIds = Array.from(orderSelect.options).map(option => option.textContent).join("\n");
    navigator.clipboard.writeText(allOrderIds);
    showPopup("Order IDs copied to clipboard!", true);
  });

  orderRow.appendChild(orderSelect);
  orderRow.appendChild(copyButton);
  wrapper.appendChild(orderRow);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.style.position = "absolute";
  deleteBtn.style.top = "10px";
  deleteBtn.style.right = "10px";
  deleteBtn.style.background = "#e74c3c";
  deleteBtn.style.color = "white";
  deleteBtn.style.border = "none";
  deleteBtn.style.borderRadius = "50%";
  deleteBtn.style.width = "28px";
  deleteBtn.style.height = "28px";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.title = "Remove";
  deleteBtn.style.fontWeight = "bold";
  wrapper.appendChild(deleteBtn);

  addRunAndScheduleButtons(wrapper, indexOverride);

  accountList.appendChild(wrapper);

  let customer = loadedCustomer ? { ...loadedCustomer } : null;
  let customerIndex = indexOverride !== null ? indexOverride : newFormData.length;

  updatePhoneBtn.addEventListener("click", () => {
    const newPhone = phoneInput.value.trim();
    if (newPhone) {
      customer.phone = newPhone;
      newFormData[customerIndex] = customer;
      saveData();
      showPopup("Phone updated successfully!", true);
    } else {
      showPopup("Please enter a valid phone number.", false);
    }
  });

  deleteBtn.addEventListener("click", () => {
    if (customerIndex >= 0) {
      newFormData.splice(customerIndex, 1);
      newCustomerData.splice(customerIndex, 1);
      saveData();
      renderAllAccounts();
    }
  });

  wrapper.dataset.accountIndex = customerIndex;
  wrapper.classList.add("account-block");
};
// ...existing code...


// function appendOrderIdToSelect(index, orderId) {
//   const selectElement = document.querySelector(`#order-select-${index}`);
//   if (selectElement) {
//     const option = document.createElement("option");
//     option.value = orderId;
//     option.textContent = `Order ID: ${orderId}`;
//     selectElement.appendChild(option);f

//     // Highlight the account block green
//     const wrapper = selectElement.closest(".account-block");
//     if (wrapper) {
//       wrapper.style.background = "linear-gradient(90deg, #d4fc79 0%, #96e6a1 100%)";
//       setTimeout(() => {
//         wrapper.style.background = "linear-gradient(90deg, #f9f9f9 70%, #e9f7fe 100%)";
//       }, 2000);
//     }
//   }
// }

function appendOrderIdToSelect(index, orderId) {
  const selectElement = document.querySelector(`#order-select-${index}`);
  if (selectElement) {
    const option = document.createElement("option");
    option.value = orderId;
    option.textContent = `Order Code: ${orderId}`;
    selectElement.appendChild(option);


    // Optionally, also highlight the account block
    const wrapper = selectElement.closest(".account-block");
    if (wrapper) {
      wrapper.style.background = "linear-gradient(90deg, #d4fc79 0%, #96e6a1 100%)";
    }
  }
}
// ...existing code...

    fileInput.addEventListener("change", async (e) => {
      const file = e.target.files[0];
      if (file) {
        const content = await file.text();
        const parsed = JSON.parse(content);
        if (Array.isArray(parsed)) {
          parsed.forEach((customer) => {
            newFormData.push(customer);
            newCustomerData.push({});
          });
          saveData();
          renderAllAccounts();
        }
      }
    });


    // function appendOrderIdToSelect(index, orderId) {
    //   const selectElement = document.querySelector(`#order-select-${index}`);
    //   if (selectElement) {
    //     const option = document.createElement("option");
    //     option.value = orderId;
    //     option.textContent = `Order ID: ${orderId}`;
    //     selectElement.appendChild(option);
    //   }
    // }

    // Add Run Now and Schedule Now Buttons
    function addRunAndScheduleButtons(wrapper, index) {
      const runNowBtn = document.createElement("button");
      runNowBtn.textContent = "Run Now";
      runNowBtn.addEventListener("click", () => processAppointment(index));
      wrapper.appendChild(runNowBtn);

      const scheduleNowBtn = document.createElement("button");
      scheduleNowBtn.textContent = "Schedule Now";
      scheduleNowBtn.addEventListener("click", () => {
        const now = new Date();
        const minutes = now.getMinutes();
        const scheduleTime = new Date(now);

        // Calculate the next 10-minute interval and subtract 1 second
        scheduleTime.setMinutes(minutes + (10 - (minutes % 10)) - 1);
        scheduleTime.setSeconds(59);

        const delay = scheduleTime - now;
        setTimeout(() => processAppointment(index), delay);
        setTimeout(() => processAppointment(index), delay);
        setTimeout(() => processAppointment(index), delay);

        setTimeout(() => processAppointment(index), delay+1000);
        setTimeout(() => processAppointment(index), delay+1000);
        setTimeout(() => processAppointment(index), delay+1000);

        setTimeout(() => processAppointment(index), delay+2000);
        setTimeout(() => processAppointment(index), delay+2000);

      });
      wrapper.appendChild(scheduleNowBtn);
    }

    function getSelectValues(index) {
      const selects = getLocalStorageData("newFormData");;
      const officeId = selects[index].site || 24;

      let durationId, region, city,deliverySiteId;

      switch (parseInt(officeId)) {
        case 24:
          durationId = 781;
          region = selects[index].region || "Addis Ababa";
          city = selects[index].city || "Addis Ababa";
          deliverySiteId = 1;
          break;
        case 27:
          durationId = 901;
          region = selects[index].region || "Amhara";
          city = selects[index].city || "Dessie";
          deliverySiteId = 6;
          break;
        case 28:
          durationId = 941;
          region = selects[index].region || "Sidama";
          city = selects[index].city || "Hawassa";
          deliverySiteId = 16;
          break;
        case 39:
          durationId = 1302;
          region = selects[index].region || "Central Ethiopia Regional State";
          city = selects[index].city || "Hossana";
          deliverySiteId = 18;
          break;
        case 33:
          durationId = 1101;
          region = selects[index].region || "Oromia";
          city = selects[index].city || "Jimma";
          deliverySiteId = 13;
          break;
        case 32:
          durationId = 1061;
          region = selects[index].region || "Oromia";
          city = selects[index].city || "Adama";
          deliverySiteId = 12;
          break;
        case 34:
          durationId = 1141;
          region = selects[index].region || "Dire Dawa";
          city = selects[index].city || "Dire Dawa";
          deliverySiteId = 14;
          break;
        case 25:
          durationId = 821;
          region = selects[index].region || "Amhara";
          city = selects[index].city || "Bahir Dar";
          deliverySiteId = 10;
          break;
        default:
          durationId = 781;
          region = selects[index].region || "Addis Ababa";
          city = selects[index].city || "Addis Ababa";
          deliverySiteId = 1;
      }

      return {
        processDays: selects[index].processDays === 1 ? 1:2 || 2,
        officeId,
        deliverySiteId,
        durationId,
        region,
        city
      };
    }


    function getLocalStorageData(key) {
      return JSON.parse(localStorage.getItem(key));
    }

    function getTomorrowDate() {
      const tomorrow = new Date();
      const today = tomorrow.getDay(); // Get the current day (0 = Sunday, 6 = Saturday)

      if (today === 6) { // If today is Saturday
        tomorrow.setDate(tomorrow.getDate() + 2);
      } else {
        tomorrow.setDate(tomorrow.getDate() + 1);
      }

      return tomorrow.toISOString().split('T')[0]; 
    }

    async function submitAppointment(index) {
      const url = "https://ethiopianpassportapiu.ethiopianairlines.com/Schedule/api/V1.0/Schedule/SubmitAppointment";
      
      const customerData = getLocalStorageData("newCustomerData")[index];
      const formData  = getLocalStorageData("newFormData")[index];

      const selectValues = getSelectValues(index);
      let attempt = 0;
      const maxRetries = 2;

      while (attempt < maxRetries) {
        const payload = {
          id: 0,
          OfficeId: parseInt(selectValues.officeId, 10),
          RequestTypeId: 2,
          isUrgent: true,
          ProcessDays: parseInt(selectValues.processDays, 10),
        };

        const headers = {
          "Authorization": `Bearer ${initialDefaultToken}`,
          "Accept": "application/json, text/plain, */*",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
          "Content-Type": "application/json;charset=UTF-8",
          "Origin": "https://www.ethiopianpassportservices.gov.et",
          "Referer": "https://www.ethiopianpassportservices.gov.et/",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          "Accept-Language": "en-GB,en;q=0.9,ar;q=0.8,zh-CN;q=0.7,zh-HK;q=0.6,zh;q=0.5,en-US;q=0.4,am;q=0.3",
          "Sec-Fetch-Site": "cross-site",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty"
        };

        try {
          const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(payload)
          });

          if (response.ok) {
            const result = await response.json();
            const appointmentId = result.appointmentResponses[0]?.id;
            const durationIdUsed = result.appointmentResponses[0]?.durationId;

            if (appointmentId) {
              console.log(`✅ Appointment booked successfully! ID: ${appointmentId}`);
              return { appointmentId, durationIdUsed };
            }
          }
        } catch (error) {
          console.error("❌ Error submitting appointment:", error);
        }

        attempt++;
      }

      console.error("❌ All attempts failed. fitching price is failed.");
      return null;
    }

    // Function to submit a request using the appointment ID
    async function submitRequest(index, appointmentId) {
      const url = "https://ethiopianpassportapiu.ethiopianairlines.com/Request/api/V1.0/Request/SubmitRequest";

      const customerData = getLocalStorageData("newCustomerData")[index];
      const formData  = getLocalStorageData("newFormData");

      const selectValues = getSelectValues(index);
      const firstApplicant = formData[index] || {};
      
      let attempt = 0;
      const maxRetries = 100;

      while (attempt < maxRetries) {
        const payload = {
          requestId: 0,
          requestMode: 1,
          processDays: parseInt(selectValues.processDays, 10) === 1 ? 1 : 2,
          officeId: parseInt(selectValues.officeId, 10),
          deliverySiteId: parseInt(selectValues.deliverySiteId, 10),
          requestTypeId: 2,
          appointmentIds: [appointmentId],
          userName: "",
          deliveryDate: "",
          status: 0,
          confirmationNumber: "",
          applicants: [
            {
              personId: 0,
              firstName: firstApplicant.firstName,
              middleName: firstApplicant.middleName,
              lastName: firstApplicant.lastName,
              geezFirstName: firstApplicant.geezFirstName || "",
              geezMiddleName: firstApplicant.geezMiddleName || "",
              geezLastName: firstApplicant.geezLastName || "",
              dateOfBirth: firstApplicant.birthDate || "",
              gender: parseInt(firstApplicant.gender, 10) || 0,
              nationalityId: 1,
              height: "",
              eyeColor: "",
              hairColor: "Black",
              occupationId: null,
              birthPlace: firstApplicant.birthplace || null,
              birthCertificateId: "",
              photoPath: "",
              employeeID: "",
              applicationNumber: "",
              organizationID: "",
              isUnder18: false,
              isAdoption: false,
              passportNumber: "",
              isDatacorrected: false,
              passportPageId: 1,
              correctionType: 0,
              maritalStatus: parseInt(firstApplicant.maritalStatus, 10) || 0,
              phoneNumber: firstApplicant.phone.length >= 10 ? firstApplicant.phone : "0901123227",
              email: "",
              requestReason: 0,
              address: {
                personId: 0,
                addressId: 0,
                city: selectValues.city,
                region: selectValues.region,
                state: "",
                zone: "",
                wereda: "",
                kebele: "",
                street: "",
                houseNo: "",
                poBox: "",
                requestPlace: ""
              },
              familyRequests: []
            }
          ]
        };

        const headers = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${initialDefaultToken}`
        };

        try {
          const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(payload)
          });

          if (response.ok) {
            const result = await response.json();
            const requestId = result?.serviceResponseList?.[0].requestId;
            const requestPersonId = result?.serviceResponseList?.[0].requestPersonId;

            const PUtype = parseInt(selectValues.processDays, 10);

            // Set price based on urtype
            const price = PUtype === 1 ? 25000 : 20000;
            console.log("Price set to:", price);
            if (price === null) {
              console.error("❌ Failed to retrieve service price.");
              return;
            }
            console.log(`💰 Service price: ${price}`);

            if (requestId) {
              console.log(`✅ Request submitted successfully! Request ID: ${requestId}`);
              // await getServicePrice(requestId);
              const promises = [];

              for (let i = 0; i < 5; i++) {
                promises.push(
                  (async () => {
                    console.log(`💳 Processing payment of ${price} for Request ID: ${requestId}`);
                    
                    const paymentSuccess = await makePayment(index, requestId, price);
                    
                    if (!paymentSuccess) {
                      console.error(`❌ Payment failed for Request ID: ${requestId}`);
                      return null; // mark failed ones as null
                    }
                    
                    console.log(`✅ SUCCESS ORDER CODE: ${paymentSuccess}`);
                    
                    return null; // return success
                  })()
                );
              }
              
              // Wait for all payments to finish (whether success or fail)
              const results = await Promise.allSettled(promises);
              
              // Log final status
              results.forEach((result, index) => {
                if (result.status === 'fulfilled') {
                  console.log(`🎯 Payment ${index + 1} success:`, result.value);
                } else {
                  console.log(`💥 Payment ${index + 1} failed:`, result.reason);
                }
              });
              
              console.log("🏁 All payments attempted.");  
              return null;
            }
            
          } else {
            console.error("❌ Request submission failed.");
          }
        } catch (error) {
          console.error("❌ Error submitting request:", error);
        }
        attempt++;
      } 
      console.error("❌ All attempts failed. Submit Request failed");
      return null;
    }

    async function makePayment(index, requestId, amount) {
      if (!amount) {
        console.error("❌ Missing amount for payment.");
        return;
      }
  
      const url = "https://ethiopianpassportapiu.ethiopianairlines.com/Payment/api/V1.0/Payment/OrderRequest";
      const customerData = getLocalStorageData("newFormData")[index];
      const selectValues = getSelectValues(index);
      
      const payload = {
        FirstName: customerData.firstName,
        LastName: customerData.lastName,
        Email: customerData.email,
        Phone: customerData.phone.length >= 10 ? customerData.phone : "0901123227",
        Amount: amount,
        Currency: "ETB",
        City: selectValues.city,
        Country: "ET",
        Channel: "Mobile",
        PaymentOptionsId: 13,
        requestId: requestId
      };
      let attempt = 0;
      const maxRetries = 15;
      while (attempt < maxRetries) {
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${initialDefaultToken}`,
              "Accept": "application/json, text/plain, */*",
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
              "Content-Type": "application/json;charset=UTF-8",
              "Origin": "https://www.ethiopianpassportservices.gov.et",
              "Referer": "https://www.ethiopianpassportservices.gov.et/",
              "Accept-Encoding": "gzip, deflate, br, zstd",
              "Accept-Language": "en-GB,en;q=0.9,ar;q=0.8,zh-CN;q=0.7,zh-HK;q=0.6,zh;q=0.5,en-US;q=0.4,am;q=0.3",
              "Sec-Fetch-Site": "cross-site",
              "Sec-Fetch-Mode": "cors",
              "Sec-Fetch-Dest": "empty"
            },
            body: JSON.stringify(payload)
          });

          const result = await response.json();
          if (response.ok && result?.orderId) {
            console.log("✅ Payment order placed successfully!");
            appendOrderIdToSelect(index, result.orderId)
            console.log("Order ID:", result.orderId);
            return result.orderId;  // ✅ return the orderId here
          } else {
            console.error("❌ Payment order failed or orderId missing.");
          }
        } catch (error) {
          console.error("❌ Error making payment:", error);
        }
        attempt++;
      } 
      console.error("❌ All attempts failed. Order Request failed");
      return null;
    }

    async function processAppointment(index) {
      try {
        // Step 1: Submit Appointment
        const appointmentData = await submitAppointment(index);
        if (!appointmentData || !appointmentData.appointmentId) {
          console.error("❌ Appointment submission failed.");
          return;
        }
        console.log(`✅ Appointment submitted successfully! Appointment ID: ${appointmentData.appointmentId}`);

        // Step 2: Submit Request
        const requestData = await submitRequest(index, appointmentData.appointmentId);
        if (!requestData || !requestData.requestId) {
          console.error("❌ Request submission failed.");
          return;
        }
        console.log(`✅ Request submitted successfully! Request ID: ${requestData.requestId}`);

        // Step 3: Get Service Price
        // const price = await getServicePrice(requestData.requestId);
        // Retrieve 'urtype' from localStorage or set default to 2

        // Step 6: Make Payment
      } catch (error) {
        console.error("❌ Error in processAppointment:", error);
      }
    }

    runAllBtn.addEventListener("click", () => {
      newFormData.forEach((data, index) => {
          const customer = newFormData[index];
          for (let i = 0; i < 3; i++) {
            processAppointment(index);
          }
      });
    });

    scheduleAllBtn.addEventListener("click", () => {
      const now = new Date();
      const minutes = now.getMinutes();
      const scheduleTime = new Date(now);

      // Calculate the next 10-minute interval and subtract 1 second
      scheduleTime.setMinutes(minutes + (10 - (minutes % 10)) - 1);
      scheduleTime.setSeconds(59);

      const delay = scheduleTime - now;
      setTimeout(() => {
        newFormData.forEach((data, index) => {

        setTimeout(() => processAppointment(index),0);

        setTimeout(() => processAppointment(index), 1000);

        setTimeout(() => processAppointment(index), 2000);
        setTimeout(() => processAppointment(index), 2000);

        setTimeout(() => processAppointment(index), 3000);
        });
      }, delay);

      showPopup(`Scheduled for ${scheduleTime.toLocaleTimeString()}`, true);
    });

    renderAllAccounts();
  }
});