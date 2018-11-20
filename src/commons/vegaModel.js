export default class VegaModel {

    constructor(height, width, name) {

        this.data = {}

        this.data["width"] = width;
        this.data["height"] = height;
        this.data["spec"] = {'layer':[]};
        this.data["repeat"] = {};
        this.data['background'] = '#202020'
        this.config = {}
      
        this['data'].title = {

            "text": name,
            "anchor": "middle",
            "fontSize": 20
        }

        this.layers = {}
   
    }
    getData(){

        return this.data['data']['values']
    }
    setData(values){

        this.data['data'] = {}

        this.data['data']['values'] = values

    }
    setEncoding(parent, rule){

        if(parent in this.layers){

            let meta = {'field': rule.name, 'type':rule.type}

            this.layers[parent].encoding[rule.key] = meta
            
        }
        else{

            this.layers[parent] = {'encoding':{}}
                
            let meta = {'field': rule.name, 'type':rule.type}

            this.layers[parent].encoding[rule.key] = meta

            this.layers[parent]['width'] = this.data["width"]

            this.layers[parent]['height'] = this.data["height"]

            this.data.spec.layer.push(this.layers[parent])
        
        }
        
    }
    setDescription(text){

        this['data'].description = text
    }  

    setMark(parent, mark){

        this.layers[parent].mark = mark

        /*if(mark == 'line'){

            let fill = ''
            let stroke = '#ED3500'
            this.layers[parent].mark = {'type':mark,'fill':fill, 'stroke':stroke}
        }
        else{

            let fill = '#1473e6'
            let stroke = ''
            this.layers[parent].mark = {'type':mark,'fill':fill, 'stroke':stroke}
        }*/

        

    }
    getOutput(){

        if(this.data['data'] != undefined && this.data['data']['values'] != undefined){

            if(this.mark != undefined){

                if(this['data']['encoding'] != undefined){

                    return this.data
                }
            }
        }

        return 'wrong argument'
    }

    getOutputForced(){

        /*let data = this.data

        let layers = this.data.spec.layer

        for(name in this.layers){

            let layer = this.layers[name]

            layer['width'] = this.data["width"]

            layer['height'] = this.data["height"]

            layers.push(layer)

        }

        data.layer = layers*/

        return this.data
    }
    getConfig(){

        for(let key in this.data){

            if(key !== 'data'){

                this.config[key] = this.data[key]
            }
        }

        return this.config
    }
}