import { DataTable } from 'simple-datatables'

function initTable() {
    if (document.getElementById('search-table') && typeof DataTable !== 'undefined') {
        const dataTable = new DataTable('#search-table', {
            searchable: true,
            sortable: true,
            perPage: 5,
        })
    }
}

// Execute initialization after DOM loaded
document.addEventListener('astro:page-load', () => {
    initTable()
})
