<?php

namespace Tests\Browser\Pages;

use Laravel\Dusk\Browser;

class AddProductPage extends Page
{
    /**
     * Get the URL for the page.
     *
     * @return string
     */
    public function url()
    {
        return '/admin/plugins/Ecommerce/product-add';
    }

    /**
     * Assert that the browser is on the page.
     *
     * @param  Browser  $browser
     * @return void
     */
    public function assert(Browser $browser)
    {
//        $browser->assertPathIs($this->url())
//            ->assertSee('Add Product')
//            ->type('@add-product-name', 'Reebok Shoes')
//            ->type('@add-product-description', 'This is description')
//            ->type('@add-product-price', 1500)
//            ->select('@add-product-stock', 1)
//            ->click('@add-product-categories')
//            ->click('li.multiselect__element')
//            ->click('li.multiselect__element:nth-of-type(2)')
//            ->click('@add-product-submit')
//            ->click('@add-product-submit')
//            ->waitFor('.swal2-shown')
//            ->press('OK')
//            ->waitUntilMissing('.swal2-shown')
//            ->waitForLocation('/admin/plugins/Ecommerce/product-list')
//            ->assertSee('Reebok Shoes');

        $browser->assertPathIs($this->url())
            ->assertSee('Add Product')
            ->type('@add-product-name', '')
            ->type('@add-product-description', 'This is description')
            ->type('@add-product-price', 1500)
            ->select('@add-product-stock', 1)
            ->click('@add-product-categories')
            ->click('li.multiselect__element')
            ->click('li.multiselect__element:nth-of-type(2)')
            ->click('@add-product-submit')
            ->click('@add-product-submit')
            ->waitFor('.swal2-shown')
            ->assertSee('Oops')
            ->press('OK')
            ->waitUntilMissing('.swal2-shown')
            ->assertSee('The name field is required.');

    }

    /**
     * Get the element shortcuts for the page.
     *
     * @return array
     */
    public function elements()
    {
        return [
//            '@add-product-name' => '#add-product-name',
        ];
    }
}
