# 📘 Reglas de Negocio

Este documento describe las **reglas de negocio** implementadas en la aplicación. Las reglas están organizadas por entidad y representan el comportamiento esperado del sistema más allá de las simples operaciones CRUD.

> ✅ Este archivo debe mantenerse actualizado conforme se implementen nuevas reglas o se modifiquen las existentes.

---

## 👤 Usuario

- Un usuario puede tener una o más categorías asignadas (`Cliente`, `Repartidor`, `Staff`).
- Solo los usuarios con categoría `Staff` pueden administrar restaurantes o modificar pedidos.
- Un usuario debe tener un correo electrónico único dentro del sistema.

---

## 🍽️ Restaurante

- Un restaurante puede tener múltiples ítems asociados.
- Solo un usuario con categoría `Staff` puede crear, editar o desactivar un restaurante.
- Un restaurante debe tener una ubicación válida y al menos un método de contacto.

---

## 📦 Pedido

- Un pedido debe estar compuesto por:
  - Un `Usuario` con categoría `Cliente`
  - Un `Restaurante` válido
  - Uno o más `Items`
- Un pedido no puede realizarse si el restaurante está desactivado.
- Un repartidor solo puede estar asignado a **un pedido activo a la vez**.
- No se puede asignar un pedido a un usuario que no tenga la categoría `Repartidor`.
- Un pedido no puede incluir ítems de distintos restaurantes.

---

## 🛍️ Item

- Un ítem puede pertenecer a múltiples categorías (`Vegano`, `Sin TACC`, etc.).
- Un ítem debe tener un precio mayor a cero.
- Un ítem solo puede estar disponible si el restaurante asociado también está activo.

---

## 🗂️ Categoría

- Las categorías pueden aplicarse a usuarios, productos o ambos.

---
