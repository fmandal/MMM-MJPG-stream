Module.register('MMM-MJPG-stream', {
    defaults: {
        title: 'MJPG Stream',
        header: false,
        url: '',
        width: '100%',
        height: '300px',
        refreshInterval: 60000
    },

    getTranslations: function() {
        return {
            no: "translations/no.json",
        }
    },

    getScripts: function() {
        return [];
    },

    getStyles: function() {
        return [
            'styles.css'
        ];
    },

    start: function() {
        Log.info('Starting module ' + this.name);
        this.loaded = false;
        var self = this;
        setInterval(function() {
            self.updateDom();
        }, 1000);
    },

    getDom: function() {
        var wrapper = document.createElement('div');
        if(!this.loaded){
            wrapper.innerHTML = this.translate('LOADING');
            wrapper.className = "dimmed light small";
            return wrapper;
        }

        if(this.config.header){
            var header = document.createElement('header');
            header.innerHTML = this.config.title;
            header.className = 'align-left';
            wrapper.appendChild(header);
        }
        
        wrapper.appendChild(this.loadUrl());

        return wrapper;
    },
    
    
