export default function SetCategoryValues(category) {
    switch (category) {
        case 'all':
        return {
                  name: 'all',
                  icon: 'clipboard',
                  color: '#2196f3'
                }
        case 'home':
        return {
                  name: 'home',
                  icon: 'home',
                  color: '#2196f3'
                }
        case 'school':
        return {
                  name: 'school',
                  icon: 'book',
                  color: '#2196f3'
                }
        case 'work':
        return {
                  name: 'work',
                  icon: 'briefcase',
                  color: '#2196f3'
                }
        default:
        return  {
                  name: 'all',
                  icon: 'clipboard',
                  color: '#2196f3'
                }
    }
}