fetch('http://192.168.43.152:1337/api/catalogues?pagination[pageSize]=30')
	.then(res => res.json())
	.then(res2 => {
		const corps = document.querySelector(".blockHouse")
		res2.data.forEach((e)=>{
  			corps.innerHTML += `
              <a href="produit.html">
              <div class="newHouse">
                  <img src="/img/travel1.jpg" alt="voyage">
                  <div class="description">
                      <div class="dColumn">
                          <h5>${e.attributes['Nom']}</h5>
                          <p>${e.attributes['Description']}</p>
                      </div>
                      <div class="dColumn">
                          <p class="price">3000€ <br> <span>/ semaine</span></p>
                          <p>4 pers</p>
                      </div>
                  </div>
              </div>
              </a>`
		})
	})

// Menu 
const menu = document.querySelector('#buttonMenu');
const profil = document.querySelector('#buttonProfil');

menu.addEventListener('click', openMenu);
profil.addEventListener('click', openConnexion);

function openMenu() {
	const showMenu = document.querySelector('.menuDesk');
	showMenu.classList.toggle('displayFlex');
}

function openConnexion() {
	const showConnexion = document.querySelector('.formDesk');
	showConnexion.classList.toggle('activeProfil');
}

mobiscroll.datepicker('#demo-booking-multiple', {
    controls: ['calendar', 'timegrid'],
    min: '2022-03-16T00:00',
    max: '2022-09-16T00:00',
    minTime: '08:00',
    maxTime: '19:59',
    stepMinute: 60,
    // example for today's labels and invalids
    labels: [{
        start: '2022-03-16',
        textColor: '#e1528f',
        title: '1 SPOTS'
    }],
    invalid: [{
        start: '2022-03-16T08:00',
        end: '2022-03-16T13:00'
    }, {
        start: '2022-03-16T15:00',
        end: '2022-03-16T17:00'
    }, {
        start: '2022-03-16T19:00',
        end: '2022-03-16T20:00'
    }]
});


// let currentMonth = new Date().getMonth();
// let currentYear = new Date().getFullYear();
// let clickedDays = 0;
// let bookingSteps = 0;
// let lastClickedDay;
// let startDate = "";
// let endDate = "";
// let monthNames = ["January", "February", "March", "April", "May", "June",
// 	"July", "August", "September", "October", "November", "December"
// ];
// let monthShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
// let bookedDates = [];
// let selectedDates = [];


// Date.prototype.addDays = function(days) {
// 	let dat = new Date(this.valueOf())
// 	dat.setDate(dat.getDate() + days);
// 	return dat;
// }
// function formatDates(dates) {
// 	if (dates != null) {
// 		let newDateArray = [];
// 		for (let i = 0; i < dates.length; i++) {
// 			let date = "";
// 			date += dayNames[dates[i].getDay()] + "-";
// 			date += dates[i].getDate() + "-";
// 			date += monthNames[dates[i].getMonth()] + "-";
// 			date += dates[i].getFullYear();
// 			newDateArray.push(date);
// 		}
// 		return newDateArray;
// 	}
// 	return null;
// }
// function getDates(startDate, stopDate) {
// 	if (startDate != "" && endDate != "") {
// 		let dateArray = new Array();
// 		let currentDate = startDate;
// 		while (currentDate <= stopDate) {
// 			dateArray.push(new Date(currentDate))
// 			currentDate = currentDate.addDays(1);
// 		}
// 		return dateArray;
// 	}
// 	return null;
// }
// function validateForm() {
// 	let formValidated = true;
	
// 	if($("#form-name").val() == "" || $("#form-name").val() == null) {
// 		$("#form-name").addClass("formError");
// 		formValidated = false;
// 	}
// 	else {
// 		$("#form-name").removeClass("formError");
// 	}
	
// 	if($("#form-number").val() == "" || $("#form-number").val() == null) {
// 		$("#form-number").addClass("formError");
// 		formValidated = false;
// 	}
// 	else {
// 		$("#form-number").removeClass("formError");
// 	}
	
// 	if($("#form-email").val() == "" || $("#form-email").val() == null) {
// 		$("#form-email").addClass("formError");
// 		formValidated = false;
// 	}
// 	else {
// 		$("#form-email").removeClass("formError");
// 	}
	
// 	if($("#form-guests").val() == "" || $("#form-guests").val() == null) {
// 		$("#form-guests").addClass("formError");
// 		formValidated = false;
// 	}
// 	else {
// 		$("#form-guests").removeClass("formError");
// 	}
	
// 	return formValidated;
// }

// function clearCalender() {
// 	clickedDays = 0;
// 	$(".month div").removeClass("clicked");
// 	$("#startdate").html("");
// 	$("#enddate").html("");

// 	startDate = "";
// 	endDate = "";
// 	selectedDates = [];
// 	bookingSteps = 0;
// }
// function clearBooking() {
// 	$("#booking-form input").val("");
// 	$("#booking-form textarea").val("");
	
// 	$("#booking-wrapper").removeClass("opened");
// 	$("#make-booking").html("MAKE BOOKING ENQUIRY");
	
	
// }

// function daysInMonth(month) {
// 	return new Date(currentYear, month, 0).getDate();
// }
// function displayCalender() {
// 	let days = daysInMonth(currentMonth + 1);

// 	$("#calender-title p").html(monthNames[currentMonth].toUpperCase());
// 	$("#calender-content").html("");

// 	for (let i = 1; i < firstDayOffset(new Date()); i++) {
// 		$("#calender-content").append("<div class='month flex center-vh'></div>");
// 	}
// 	for (let i = 1; i <= days; i++) {
// 		let day = new Date(currentYear, currentMonth, i).getDay();
// 		let string = "<div class='month'><div id='" + dayNames[day] + "-" + i + "-" + monthNames[currentMonth] + "-" + currentYear + "'class='month-selector flex center-vh clickable' onclick='monthClick(this)'><p>" + i + "</p></div></div>";
// 		$("#calender-content").append(string);
// 	}

// 	checkSelected();
// 	checkBookings();
// }
// function monthClick(e) {
// 	if ($(e).hasClass("clickable")) {
// 		clickedDays += 1;

// 		if (clickedDays == 1) {
// 			$(e).toggleClass("clicked");
// 			startDateIndex = parseInt($(e).attr('id').split('-')[1]);
// 			startDate = new Date(currentYear, currentMonth, startDateIndex);
// 		}
// 		if (clickedDays > 1) {
// 			endDateIndex = parseInt($(e).attr('id').split('-')[1]);
// 			endDate = new Date(currentYear, currentMonth, endDateIndex);
// 		}
// 		if (endDate > startDate) {
// 			let clicked = $(".clicked");
// 			$(clicked).not(clicked[0]).removeClass("clicked");
// 			$(e).toggleClass("clicked");

// 			dateArray = getDates(startDate, endDate);
// 			dateArray = formatDates(dateArray)
// 			selectedDates = dateArray;

// 			for (let i = 0; i < dateArray.length; i++) {
// 				$("#" + dateArray[i]).addClass("clicked");
// 			}
// 		}
// 		$("#startdate").html(startDate.toString().split(' ').slice(0, 4).join(' '));
// 		$("#enddate").html(endDate.toString().split(' ').slice(0, 4).join(' '));
// 	}
// }
// function firstDayOffset(date) {
// 	return new Date(currentYear, currentMonth, 1).getDay();
// }

// function checkBookings() {
// 	if (bookedDates != null) {
// 		for (let i = 0; i < bookedDates.length; i++) {
// 			let inner = bookedDates[i];
// 			for (let j = 0; j < inner.length; j++) {
// 				$("#" + inner[j]).removeClass("clickable").delay(400).addClass("booked");
// 			}
// 		}
// 	}
// }
// function checkSelected() {
// 	selectedDates = getDates(startDate, endDate);
// 	selectedDates = formatDates(selectedDates);

// 	if (selectedDates != null) {
// 		for (let i = 0; i < selectedDates.length; i++) {
// 			$("#" + selectedDates[i]).addClass("clicked");
// 		}
// 	}
// }
// function addBooking() {
// 	bookedDates.push(dateArray);
// 	clearCalender();
// 	displayCalender();
// }

// $(function() {
// 	displayCalender(currentMonth)
// 	$("#date").append(new Date);
// });

// $("#left").on("click", function() {
// 	if (currentMonth > 0)
// 		currentMonth -= 1;
// 	else {
// 		currentMonth = 11;
// 		currentYear -= 1;
// 	}
// 	displayCalender();
// });
// $("#right").on("click", function() {
// 	if (currentMonth < 11)
// 		currentMonth += 1;
// 	else {
// 		currentMonth = 0;
// 		currentYear += 1;
// 	}
// 	displayCalender();
// });
// $("#clear").on("click", function() {
// 	clearCalender();
// 	clearBooking();
// });
// $("#make-booking").on("click", function() {
// 	if(selectedDates != null && selectedDates.length > 0) {
// 		bookingSteps += 1;
		
// 		if(bookingSteps == 1) {
// 			$("#booking-wrapper").addClass("opened");
// 			$("#make-booking").html("SUBMIT ENQUIRY");
// 		}
// 		if(bookingSteps == 2) {
// 			if(validateForm()) {
// 				clearBooking();
// 				addBooking();
// 			}
// 			else {
// 				bookingSteps = 1;
// 			}
// 		}
// 	}
// });


