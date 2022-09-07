# Comandos de git
## 1. Iniciar un repositorio en el directorio actual
```git
git init
```

## 2. Añadir un archivo al repo actual
```git
git add filename.extension
```

## 3. Añadir todos los archivos al repo actual
```git
git add .
```

## 4. Crear un commit en la branch actual
```git
git commit -m "Message"
```

## 5. Crear una branch 
```git
git branch new-branch-name
```

## 6. Cambiar de branch activa
```git
git checkout other-branch-name
```

## 7. Clonar un repositorio remoto
```git
git clone https://name-of-the-repository-link
```

## 8. Publicar una branch de manera remota
```git
git push -u remote-name branch-name
```

## 9. Ver el listado de branches
```git
git branch
```

## 10. Eliminar una branch
```git
git branch -d branch-name
```

## 11. Crear una branch y cambiar a ella
```git
git branch -b new-branch-name
```

## 12. Mostrar el estado actual del repo, esto es:
- Si la branch actual está actualizada
- Si existen cambios para hacer commit, push o pull
- Si hay archivos creados, modificados o eliminados comparados con el anterior commit
- Si hay archivos en estado de staged, unstaged o untracked
```git
git status
```
