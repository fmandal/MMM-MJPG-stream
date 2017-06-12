Module.register('MMM-MJPG-stream', {
    defaults: {
        title: 'MJPG Stream',
        header: false,
        width: '100%',
        height: '480px',
        moveUp: '60px;',
        refreshInterval: 60 // IMPORTANT: Refresh interval is to be set in seconds, not millisecs.
    },

    getScripts: function() {
        return [];
    },

    start: function() {
        Log.info('Starting module ' + this.name);
        this.loaded = false;
        var self = this;
        setInterval(function() {
            self.updateDom();
        }, 5000);
    },

    getDom: function() {
        var content = document.createElement('iframe');
        content.style.border = "0";
        content.style.background = "#00ff00";
        content.style.width = this.config.width;
        content.style.height = this.config.height;
        var html = '<html><head><meta http-equiv="refresh" content="' + this.config.refreshInterval + '"><title>Content</title></head><body style="margin:0;padding:0;">';
        html += '<div style="width:60%;height:100%;background: #333 url(\'' + this.config.url1 + '\') no-repeat fixed center top; float:left;';
        html += ' background-position: 70% -125px; transform: rotate(180deg); background-size: 1280px 960px"></div>';
        html += '<div style="width:40%;height:100%;background: #333 url(\'' + this.config.url2 + '\') no-repeat fixed center center; float:right;';
        html += ' background-position: 101% 100%; background-size: 640px 480px;"></div>';
        html += '</body></html>';
        content.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
        return content;
    },

});
