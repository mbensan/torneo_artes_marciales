alumnos = [
    {
        'nombre': 'Jose Luis',
        'ciudad': 'Villarrica'
    },
    {
        'nombre': 'Matias',
        'ciudad': 'Viña'
    },
    {
        'nombre': 'Ivan Otarola',
        'ciudad': 'Stgo'
    },
    {
        'nombre': 'Franco',
        'ciudad': 'Temuco'
    }
]

for alumno in alumnos:
    nombre = alumno['nombre']
    ciudad = alumno['ciudad']
    print(f'Se llama {nombre} y vive en {ciudad}')
