let publicacao = []
let EditIndexMoleza = null

function addPublicacao() {
    const userName = document.getElementById('newName').value
    const publicacaoText = document.getElementById('newInfo').value

    if (userName !== '' && publicacaoText !== '') {
        publicacao.push({ name: userName, text: publicacaoText })
        document.getElementById('newName').value = ''
        document.getElementById('newInfo').value = ''
        publicacaoMolezinha()
    }
}

function publicacaoMolezinha() {
    const infoList = document.getElementById('infoList')
    infoList.innerHTML = ''

    publicacao.forEach(function (publi, index) {
        const li = document.createElement('li')
        li.innerHTML = `<strong>${publi.name}:</strong> ${publi.text}`

        setTimeout(function () {
            li.classList.add('visible')
        }, index * 100)

        const editButton = document.createElement('button')
        editButton.innerText = 'Editar'
        editButton.className = 'button-edit'

        editButton.onclick = function () {
            abrirModalEdit(index)
        }

        li.appendChild(editButton)
        // ----------------------------------------------------------------------
        const deleteButton = document.createElement('button')
        deleteButton.innerText = 'Remover'
        deleteButton.className = 'button-delete'

        deleteButton.onclick = function () {
            deletarComentario(index)
        }

        li.appendChild(deleteButton)

        infoList.appendChild(li)
    })
}


function abrirModalEdit(index) {
    EditIndexMoleza = index // aqui eu uso para saber qual comentario esta sendo editado no momento
    document.getElementById('editInput').value = publicacao[index].text
    document.getElementById('editModal').style.display = 'flex'
}


function SalvarEdit() {
    publicacao[EditIndexMoleza].text = document.getElementById('editInput').value // aqui estou atualizando o comentario na posição EditIndexMoleza e no array publicacao
    FecharModal()
    publicacaoMolezinha()
}


function FecharModal() {
    document.getElementById('editModal').style.display = 'none'
}

function deletarComentario(index) {
    publicacao.splice(index, 1)
    publicacaoMolezinha()
}


document.getElementById('addButton').addEventListener('click', function () {
    addPublicacao()
})

document.getElementById('saveEdit').addEventListener('click', function () {
    SalvarEdit()
})


document.getElementById('closeModal').addEventListener('click', FecharModal)
