import { test, expect } from '@playwright/test';
import { Formedix } from '../FormedixPOM/FormedixPOM'

test('Formedix', async ({ page }) => {

    const FormedixTest = new Formedix(page)

    await FormedixTest.NavigateToLoginPage()
    await FormedixTest.SignIn('testteamtechtest', 'Ryz3T3st!x1')
    await FormedixTest.NavigateToForms()
    await FormedixTest.UpdateMedicalHistory('DescriptionUpdate1', 'LocaleUpdate1', 'DescriptionUpdate1')
    await FormedixTest.SignOut()
});