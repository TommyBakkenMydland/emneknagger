import React, { Component } from "react";
import { Label } from "office-ui-fabric-react/lib/Label";
import { TagPicker } from "office-ui-fabric-react/lib/components/pickers/TagPicker/TagPicker";


const itemsWithName = [{ id: 1, name: "Red" }, { id: 2, name: "Blue" }, { id: 3, name: "Yellow" }];

class ItemFilter extends Component {
  renderSuggestionItem = item => {
    return item.name || item.title;
  };

  listContainsDocument = (item, list, prop) => {
    if (!list || !list.length || list.length === 0) {
      return false;
    }
    return list.filter(compare => compare[prop] === item[prop]).length > 0;
  };

  onFilterChangedName = (text, list) => {
    return text
      ? itemsWithName
          .filter(i => i.name.toLowerCase().includes(text.toLowerCase()))
          .filter(item => !this.listContainsDocument(item, list, "name"))
      : [];
  };
  render() {
    return (
      
        <div className="App">
    
          <Label>Emneknagger</Label>
          <TagPicker
          
            getTextFromItem={item => item.name}
            onResolveSuggestions={this.onFilterChangedName}
            onRenderSuggestionsItem={this.renderSuggestionItem}
            itemLimit={5}
            componentRef="Yes"
            inputProps={{
              onBlur: () => console.log('onBlur called'),
              onFocus: () => console.log('onFocus called'),
              'aria-label': 'Tag Picker'
            }}
            pickerSuggestionsProps={{
              suggestionsHeaderText: 'Suggested Tags',
              noResultsFoundText: 'No Tags found, click here to save tag'
            }}
            
            />


        </div>
      
    );
  }
}

export default ItemFilter;

