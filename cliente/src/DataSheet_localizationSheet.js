import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id) {
    super(id);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "start_text_867879";
    item['en'] = "Integrantes de Proyectos";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "start_fab_169927";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "start_field_141012";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "start_text2_271105";
    item['en'] = "Aguila Torres Daniel Santiago";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "start_textblock_693388";
    item['en'] = "16211959";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "start_textblock2_204946";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "comp1_nombre_141780";
    item['en'] = "Aguila Torres Daniel Santiago";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "comp2_text_228206";
    item['en'] = "Integrantes de Proyectos";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "comp3_fab_687174";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "start_fab_1047962";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "start_fab2_68672";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "start_field_991745";
    item['en'] = "Nombre";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "start_field2_732407";
    item['en'] = "No. Control";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "start_field3_732916";
    item['en'] = "Correo";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "comp4_field2_1030425";
    item['en'] = "No. Control";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "comp4_mail_304331";
    item['en'] = "Correo";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "comp4_ok_59224";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "comp4_edit_272070";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "comp4_name_579982";
    item['en'] = "Nombre";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "start_fab_649997";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "start_mail_338775";
    item['en'] = "Correo";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "start_ok_974232";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "start_edit_286343";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "start_name_646329";
    item['en'] = "Nombre";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "start_field2_685054";
    item['en'] = "No. Control";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
