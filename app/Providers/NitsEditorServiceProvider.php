<?php

namespace App\Providers;

use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class NitsEditorServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);

//        $this->app->register('Nitseditor\System\Providers\TaskSchedulerServiceProvider');

    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function register()
    {
        foreach (nits_plugins() as $package) {
            $namespace = nits_get_plugin_config($package.'.namespace');
            if($namespace)
            {
                if(File::exists(base_path().'/plugins/'. $namespace .'/Databases/Migrations'))
                    $this->loadMigrationsFrom(base_path().'/plugins/'. $namespace .'/Databases/Migrations');

                if(File::exists(base_path().'/plugins/'. $namespace . '/Databases/Factories'))
                {
                    $this->app->singleton(Factory::class, function () use($namespace){
                        $faker = $this->app->make(Faker::class);
                        return Factory::construct($faker,base_path().'/plugins/'. $namespace . '/Databases/Factories');
                    });
                }
            }

        }

        $this->app->singleton('nitseditor', function ($app)
        {
            return new NitsEditor;
        });

    }
}
