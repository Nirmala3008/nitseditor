<?php

namespace App\Providers;

use App\Console\Commands\CreatePlugin;
use App\Console\Commands\MakePluginController;
use App\Console\Commands\MakePluginCRUD;
use App\Console\Commands\MakePluginDatabase;
use App\Console\Commands\MakePluginModel;
use App\Console\Commands\MakePluginRequest;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Laravel\Passport\Events\AccessTokenCreated;

class NitsEditorServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @param ProviderRepository $providers
     * @return void
     */
    public function boot(ProviderRepository $providers)
    {
        Schema::defaultStringLength(191);

//        $this->app->register('Nitseditor\System\Providers\TaskSchedulerServiceProvider');

        $this->createAccessTokenProvider($providers);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function register()
    {

    }

    /**
     * Create access token provider when access token is created.
     *
     * @param ProviderRepository $providers
     * @return void
     */
    protected function createAccessTokenProvider(ProviderRepository $providers)
    {
        Event::listen(AccessTokenCreated::class, function ($event) use ($providers) {
            $provider = config('auth.guards.api.provider');
            $providers->create($event->tokenId, $provider);
        });
    }
}
