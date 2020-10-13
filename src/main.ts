import $ from 'jquery';

let starting_points_factors: {[index: string]: number} =
{
    "gasoline": 0.008887,
    "kilowatthours": 0.000707040,
    "MCF": 0.054868
};

let finalResultUnits = 2;

let equiv_factors =
    [
        4.628696,		// Passenger cars not driven for one year
        8.666,		// Household energy use
        0.008887,	// Gallons of gasoline
        0.431926,		// Barrels of oil
        75.5395,		// Tanker trucks filled with gasoline
        5.906467,		// Household electricity use for one year (# of households)
        0.060477,		// Number of tree seedlings grown for 10 years
        0.765724,		// Acres of U.S. forests storing carbon for 1 year
        147.826131,		// Acres of U.S. forests preserved from conversion to cropland
        0.024462013,		// Propane cylinders used for home barbeques
        181.852164,		// Coal burned/railcars of coal
        2.940000,		// Tons of waste recycled instead of landfilled 
        3893003,	// coal fired power plant for one year
        0.000907554,	// Pounds of coal burned
        0.000403,	// Miles driven by the average passenger vehicle per year
        20.58,		// Number of garbage trucks of waste recycled instead of landfilled
        4632,		// Number of wind turbines running for a year
        0.026323, 	// Number of incandescent bulbs switched to LEDs
        0.01018, 	// Gallons of diesel consumed
        0.023502, 	// Trash bags of waste recycled instead of landfilled
        0.000007841155617, 	// Number of smartphones charged
        6.86814 	// T&D Line Losses
    ];

var multiples = [0.9071847,0.00045359237,1,0.001];

function roundIt(number: number)
{
    // this function rounds according to the following rules:
    // - If the figure is above 100 it rounds to a whole number.
    // - If the figure is between 1 and 100, it rounds to one decimal place.
    // - If the figure is between 0.001 and 1, it rounds to three decimal places.
    // - If the figure is less than 0.001, it rounds to four decimal places.

    var absolute = Math.abs(number);

    if(isNaN(number) || number == 0)
    {
        return number;
    }
    else
    {
        // If the result is above 100 let's just use a whole number. 
        if(absolute > 100)
        {
            number = Math.round(number);
        }
        // If it's lower than 100 but greater than 1, let's show it out to one decimal place (e.g., 10.1).
        else if((absolute < 100) && (absolute > 1))
        {
            number = Math.round(number * 10) / 10;
        }
        // If it's below zero, let's show it out to two decimal places for numbers up to 1/100 (e.g., 0.95, or 0.09)
        // (Note: at the request of the client, changed this part of the rounding rule to round to 3 decimal places)
        else if((absolute < 1) && (absolute > 0.001))
        {
            //number = Math.round(number * 100) / 100;
            number = Math.round(number * 1000) / 1000;
        }
        //  and out to four decimal places for numbers smaller than that (e.g., 0.0097, 0.0030).
        else
        {
            number = Math.round(number * 10000) / 10000;
        }

        return number;
    }
}

function commaSplit(srcNumber: number)
{
    var txtNumber = new String(srcNumber);

    if(isNaN(srcNumber) || txtNumber == "")
    {
        return srcNumber;
    }
    else
    {
        var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
        var arrNumber = txtNumber.split('.');
        arrNumber[0] += '.';

        do
        {
            arrNumber[0] = arrNumber[0].replace(rxSplit,'$1,$2');
        } while(rxSplit.test(arrNumber[0]));

        if(arrNumber.length > 1)
        {
            return arrNumber.join('');
        }
        else
        {
            return arrNumber[0].split('.')[0];
        }
    }
}

function calculateTotal(CO2equiv: number)
{
    let total = CO2equiv;
    $("#output").show();
    $("#y0").val(commaSplit(roundIt(total / multiples[finalResultUnits])));

    for(let i = 1;i <= equiv_factors.length;i++)
    {
        let fieldName = "#y" + i;

        if($(fieldName) != null)
        {
            $(fieldName).val(commaSplit(roundIt(total / equiv_factors[i - 1])));
        }
    }
}

$("#starting_points").on("submit",function()
{
    let userValue = Number($("#starting-input").val());
    let eType = String($("#equiv-type").val());
    let CO2equiv = userValue * starting_points_factors[eType];
    calculateTotal(CO2equiv);
    return false;
});