import { test, expect } from '@playwright/test';
import { Formedix } from '../../Pages/FormedixPOM'

test('Formedix', async ({ page }) => {

    const FormedixTest = new Formedix(page)

    await FormedixTest.NavigateToLoginPage()
    await FormedixTest.SignIn('testteamtechtest', 'Ryz3T3st!x1')
    await FormedixTest.NavigateToForms()
    await FormedixTest.UpdateMedicalHistory('DescriptionUpdate', 'LocaleUpdate', 'DescriptionUpdate')

});