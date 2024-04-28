const form = document.getElementById('form')
const fname = document.getElementById('fname')
const lname = document.getElementById('laname')
const submit = document.getElementById('submt')


form.addEventListener('submit', e=> {
    e.preventDefault();

    validateInputs();
});


   
    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classlist.add('error');
        inputControl.classlist.remove('succes')
    }
        const setSucces = (element, message) => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error');

            errorDisplay.innerText = '';
        }
        const validateInputs = () => {
            const fnameValue = fname.value.trim();
            const lanameValue = lname.value.trim();

            if(fnameValue == '') {
                setError(fname, 'First name is required')
            } else {
                setSucces(fname)
            }
            if(lnameValue == '') {
                setError(lname, 'Last name is required')
            } else {
                setSucces(lname)
            }


    }
