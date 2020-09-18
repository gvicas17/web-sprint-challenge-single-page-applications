import * as yup from 'yup'

export default yup.object().shape({
    size: yup.string()
    .oneOf(['10"','12"','14"'],'size selection is required'),

    sauces: yup.string()
    .oneOf(['originalRed','garlicRanch','bbqSauce','whiteSauce','noSauce'],'sauce selection is required'),


    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    salami: yup.boolean(),
    canadianBacon: yup.boolean(),
    grilledChicken: yup.boolean(),
    onions: yup.boolean(),
    greenBellPeppers: yup.boolean(),
    kalamataOlives: yup.boolean(),
    freshGarlic: yup.boolean(),
    pineapple: yup.boolean(),
    extraCheese: yup.boolean(),

    specialCrusts: yup.string(),
    
    specialInstructions: yup.string(),
    
    name: yup.string()
    .required('name is required')
    .min(2, 'must be at least 2 characters'),

})