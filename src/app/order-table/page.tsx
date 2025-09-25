"use client";

import { DataTable } from "@/components/ui/data-table/DataTable";
import { IOrderTable } from "@/types/order.interface";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { ordersColumns } from "./OrdersColumns";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const data: IOrderTable[] = [
  {
    name: "Product A",
    quantity: 4,
    category: "Electronics",
    username: "john_doe",
    image: "/slide1.jpg",
  },
  {
    name: "Product B",
    quantity: 2,
    category: "Clothing",
    username: "jane_smith",
    image: "/slide2.jpg",
  },
];

export default function OrderTable() {
  const [orders, setOrders] = useState<IOrderTable[]>(data);

  // Form state
  const [form, setForm] = useState<IOrderTable>({
    name: "",
    quantity: 0,
    category: "",
    username: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const blobUrl = URL.createObjectURL(file);
      setForm((prev) => ({ ...prev, image: blobUrl }));
    }
  };

  const handleSubmit = () => {
    if (!form.name || !form.username) return;
    setOrders((prev) => [...prev, form]);
    setForm({ name: "", quantity: 0, category: "", username: "", image: "" });
  };

  return (
    <div className="container mx-auto mt-3 px-5">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Orders</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2" />
              Создать
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Создать заказ</DialogTitle>
            </DialogHeader>

            <div className="grid gap-4 py-2">
              <div>
                <Label>Название</Label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Введите название"
                />
              </div>
              <div>
                <Label>Количество</Label>
                <Input
                  type="number"
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  placeholder="Введите количество"
                />
              </div>
              <div>
                <Label>Категория</Label>
                <Input
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  placeholder="Введите категорию"
                />
              </div>
              <div>
                <Label>Пользователь</Label>
                <Input
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="Введите имя пользователя"
                />
              </div>
              <div>
                <Label>Изображение (файл)</Label>
                <Input type="file" accept="image/*" onChange={handleFileChange} />
              </div>

              {form.image && (
                <div className="mt-2">
                  <Label>Предпросмотр:</Label>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={form.image}
                    alt="preview"
                    className="mt-1 h-20 w-20 rounded-md object-cover border"
                  />
                </div>
              )}
            </div>

            <Button onClick={handleSubmit}>Добавить</Button>
          </DialogContent>
        </Dialog>
      </div>

      <DataTable columns={ordersColumns} data={orders} filterKey="name" />
    </div>
  );
}
