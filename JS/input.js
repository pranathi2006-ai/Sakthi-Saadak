function updateSubSelect(){
    const appSelect = document.getElementById('Appliance');
    const compSelect = document.getElementById('Company');
    const timeSelect = document.getElementById('Time');
    const freqSelect = document.getElementById('Freq');
    const rateSelect = document.getElementById('Rating');

    compSelect.innerHTML = '<option value="" disabled selected>Select a Company</option>';
    timeSelect.innerHTML = '<option value="" disabled selected>Amount of Time Used</option>';
    rateSelect.innerHTML = '<option value="" disabled selected>Select the Power Rating</option>';
    
    compSelect.disabled = false;
    timeSelect.disabled = false;
    rateSelect.disabled = false;

    const applianceCompanies = {
        'Refrigerator': ['LG', 'Samsung', 'Whirlpool', 'GE Appliances', 'Bosch', 'Haier'],
        'Microwave': ['Panasonic', 'LG', 'Samsung', 'Whirlpool', 'GE Appliances', 'Sharp'],
        'Washing Machine': ['LG', 'Samsung', 'Whirlpool', 'Bosch', 'GE Appliances', 'Haier'],
        'Electric Stove': ['GE Appliances', 'Samsung', 'LG'],
        'Water Heater': ['LG', 'Samsung', 'Whirlpool', 'Bosch', 'GE Appliances', 'Haier'],
        'Dishwasher': ['LG', 'Samsung', 'Whirlpool', 'Bosch', 'GE Appliances', 'Haier'],
        'Kettle': ['LG', 'Samsung', 'Whirlpool', 'Bosch', 'GE Appliances', 'Haier'],
        'Fans': ['LG', 'Samsung', 'Whirlpool', 'Bosch', 'GE Appliances', 'Haier'],
        'Television': ['LG', 'Samsung', 'Whirlpool', 'Bosch', 'GE Appliances', 'Haier'],
        'Vaccuum': ['LG', 'Samsung', 'Whirlpool', 'Bosch', 'GE Appliances', 'Haier'],
        'Blender': ['LG', 'Samsung', 'Whirlpool', 'Bosch', 'GE Appliances', 'Haier'],
        'Iron': ['LG', 'Samsung', 'Whirlpool', 'Bosch', 'GE Appliances', 'Haier'],
        'Light': ['LG', 'Samsung', 'Whirlpool', 'Bosch', 'GE Appliances', 'Haier'],
        'Computer': ['LG', 'Samsung', 'Whirlpool', 'Bosch', 'GE Appliances', 'Haier'],
    };

    const applianceTime = {
        'Refrigerator': ['Less than 2 HRs', '2-4 HRS', '4-6 HRS', '6-8 HRS', '8-10 HRS', '10-12 HRS', 'More than 12 HRS', 'All Day'],
        'Microwave': ['2-5 Mins', '5-10 Mins', '10-15 Mins', '15-20 Mins', '20-30 Mins', 'More than 30 Mins'],
        'Washing Machine': ['0-15 Mins', '15-30 Mins', '30-45 Mins', '45-60 Mins', 'More than 1 HR'],
        'Electric Stove': ['0-15 Mins', '15-30 Mins', '30-45 Mins', '45-60 Mins', '60-90 Mins', '90-120 Mins', 'More than 2 HR'],
        'Water Heater': ['0-15 Mins', '15-30 Mins', '30-45 Mins', '45-60 Mins', '60-90 Mins', '90-120 Mins', 'More than 2 HR'],
        'Dishwasher': ['0-15 Mins', '15-30 Mins', '30-45 Mins', '45-60 Mins', '60-90 Mins', '90-120 Mins', 'More than 2 HR'],
        'Kettle': ['0-10 Mins', '10-20 Mins', '20-30 Mins', '30-45 Mins', '45-60 Mins', 'More than 1 HR'],
        'Fans': ['Less than 2 HRS', '2-4 HRS', '4-6 HRS', '6-8 HRS', '8-10 HRS', '10-12 HRS', 'More than 12 HRS', 'All Day'],
        'Television': ['Less than 1 HR', '1-2 HRS', '2-3 HRS', '3-4 HRS', '4-5 HRS', '5-6 HRS', '6-8 HRS', '8-10 HRS', 'More than 10 HRS'],
        'Vaccuum': ['0-15 Mins', '15-30 Mins', '30-45 Mins', '45-60 Mins', '60-90 Mins', '90-120 Mins', 'More than 2 HRS'],
        'Blender': ['0-10 Mins', '10-20 Mins', '20-30 Mins', '30-40 Mins', '40-50 Mins', '50-60 Mins', 'More than 1 HR'],
        'Iron': ['0-15 Mins', '15-30 Mins', '30-45 Mins', '45-60 Mins', '60-90 Mins', '90-120 Mins', 'More than 2 HRS'],
        'Light': ['Less than 2 HRs', '2-4 HRS', '4-6 HRS', '6-8 HRS', '8-10 HRS', '10-12 HRS', 'More than 12 HRS'],
        'Computer': ['Less than 1 HR', '1-2 HRS', '2-3 HRS', '3-4 HRS', '4-5 HRS', '5-6 HRS', '6-8 HRS', '8-10 HRS', 'More than 10 HRS'],
    }

    const applianceRating = {
        'Refrigerator': ['Less than 2 HRs', '2-4 HRS', '4-6 HRS', '6-8 HRS', '8-10 HRS', '10-12 HRS', 'More than 12 HRS', 'All Day'],
        'Microwave': ['2-5 Mins', '5-10 Mins', '10-15 Mins', '15-20 Mins', '20-30 Mins', 'More than 30 Mins'],
        'Washing Machine': ['0-15 Mins', '15-30 Mins', '30-45 Mins', '45-60 Mins', 'More than 1 HR'],
        'Electric Stove': ['0-15 Mins', '15-30 Mins', '30-45 Mins', '45-60 Mins', '60-90 Mins', '90-120 Mins', 'More than 2 HR'],
        'Water Heater': ['0-15 Mins', '15-30 Mins', '30-45 Mins', '45-60 Mins', '60-90 Mins', '90-120 Mins', 'More than 2 HR'],
        'Dishwasher': ['0-15 Mins', '15-30 Mins', '30-45 Mins', '45-60 Mins', '60-90 Mins', '90-120 Mins', 'More than 2 HR'],
        'Kettle': ['0-10 Mins', '10-20 Mins', '20-30 Mins', '30-45 Mins', '45-60 Mins', 'More than 1 HR'],
        'Fans': ['Less than 2 HRS', '2-4 HRS', '4-6 HRS', '6-8 HRS', '8-10 HRS', '10-12 HRS', 'More than 12 HRS', 'All Day'],
        'Television': ['Less than 1 HR', '1-2 HRS', '2-3 HRS', '3-4 HRS', '4-5 HRS', '5-6 HRS', '6-8 HRS', '8-10 HRS', 'More than 10 HRS'],
        'Vaccuum': ['0-15 Mins', '15-30 Mins', '30-45 Mins', '45-60 Mins', '60-90 Mins', '90-120 Mins', 'More than 2 HRS'],
        'Blender': ['0-10 Mins', '10-20 Mins', '20-30 Mins', '30-40 Mins', '40-50 Mins', '50-60 Mins', 'More than 1 HR'],
        'Iron': ['0-15 Mins', '15-30 Mins', '30-45 Mins', '45-60 Mins', '60-90 Mins', '90-120 Mins', 'More than 2 HRS'],
        'Light': ['Less than 2 HRs', '2-4 HRS', '4-6 HRS', '6-8 HRS', '8-10 HRS', '10-12 HRS', 'More than 12 HRS'],
        'Computer': ['Less than 1 HR', '1-2 HRS', '2-3 HRS', '3-4 HRS', '4-5 HRS', '5-6 HRS', '6-8 HRS', '8-10 HRS', 'More than 10 HRS'],
    }

    const selectedAppliance = appSelect.value;
    const companies = applianceCompanies[selectedAppliance];
    const time = applianceTime[selectedAppliance];
    const rate = applianceRating[selectedAppliance];

    if(companies){
        companies.forEach(comp => {
            const option = document.createElement('option');
            option.value = comp.toLowerCase();
            option.textContent = comp;
            compSelect.appendChild(option);
        });
    } else{
        compSelect.disabled = true;
    }

    if(time){
        time.forEach(tim => {
            const option = document.createElement('option');
            option.value = tim.toLowerCase();
            option.textContent = tim;
            timeSelect.appendChild(option);
        });
    } else{
        timeSelect.disabled = true;
    }

    if(rate){
        rate.forEach(rating => {
            const option = document.createElement('option');
            option.value = rating.toLowerCase();
            option.textContent = rating;
            rateSelect.appendChild(option);
        });
    } else{
        rateSelect.disabled = true;
    }

    

}