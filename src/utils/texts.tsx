// function to store the titles of each step
export function texts() {
    const headerText = [
        {
            h1: 'Personal info',
            p: 'Please provide your name, email address, and phone number.'
        },
        {
            h1: 'Diet Preferences',
            p: 'Chose your diet preferences'
        },
        {
            h1: 'Decide your goal',
            p: 'Choose your end goal'
        },
        {
            h1: 'Finishing up',
            p: 'Double-check everything looks OK before confirming.'
        }
    ]

    const arrayInformationsStep = [
        {
            num: 1,
            name: 'your info'
        },
        {
            num: 2,
            name: 'summary'
        },
        {
            num: 3,
            name: 'add-ons'
        },
        {
            num: 4,
            name: ' select plan'
        }
    ]

    return {
        headerText: headerText,
        arrayInformationsStep: arrayInformationsStep,
    }
}