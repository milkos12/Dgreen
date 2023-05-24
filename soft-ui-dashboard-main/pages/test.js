$(document).ready(function() {
    // Llamada AJAX para obtener los datos de las siembras
    $.ajax({
      url: 'http://localhost:3000/siembras',
      method: 'GET',
      dataType: 'json',
      success: function(response) {
        // Recorre los datos y crea filas en la tabla
        for (var i = 0; i < response.length; i++) {
          var siembra = response[i];
          var row = `<tr>
          <td>
            <div class="d-flex px-2">
              <div class="my-auto">
                <h6 class="mb-0 text-sm">${siembra.nombre}</h6>
              </div>
            </div>
          </td>
          <td>
            <input id="inputTexto" class="invisible-input" type="text" readonly>
            <p id="texto" class="text-sm font-weight-bold mb-0">Texto</p>
          </td>
          <td>
            <p class="text-sm font-weight-bold mb-0">$2,500</p>
          </td>
          <td>
            <p class="text-sm font-weight-bold mb-0">$2,500</p>
          </td>
          <td>
            <p class="text-sm font-weight-bold mb-0">$2,500</p>
          </td>
          <td>
            <p class="text-sm font-weight-bold mb-0">$2,500</p>
          </td>
          <td>
            <p class="text-sm font-weight-bold mb-0">$2,500</p>
          </td>
          <td>
            <p class="text-sm font-weight-bold mb-0">$2,500</p>
          </td>
          <td>
            <span class="text-xs font-weight-bold">working</span>
          </td>
          <td class="align-middle text-center">
            <div class="d-flex align-items-center justify-content-center">
              <span class="me-2 text-xs font-weight-bold">60%</span>
              <div>
                <div class="progress">
                  <div class="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
                </div>
              </div>
            </div>
          </td>
          <td class="align-middle">
            <button class="btn btn-link text-secondary mb-0">
              <i class="fa fa-ellipsis-v text-xs"></i>
            </button>
          </td>
        </tr>`;
          $('#siembrasBody').append(row);
        }
      },
      error: function(xhr, status, error) {
        console.log('Error al obtener las siembras:'+ error + '   ' + status);
      }
    });
  });
  

// Obtener el elemento del texto y el input
const texto = document.getElementById('texto');
const input = document.getElementById('inputTexto');
const editableContainer = document.querySelector('.editable-container');

// Habilitar la edición cuando se hace clic en el texto
texto.addEventListener('click', () => {
  editableContainer.classList.add('editable');
  input.removeAttribute('readonly');
  input.focus();
});

// Deshabilitar la edición cuando se pierde el foco del input
input.addEventListener('blur', () => {
  editableContainer.classList.remove('editable');
  input.setAttribute('readonly', 'readonly');
});

