export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }
    searchTerm = searchTerm.toLowerCase();
    return items.filter(item => {
      return Object.keys(item).some(key => 
        String(item[key]).toLowerCase().includes(searchTerm)
      );
    });
  }
}