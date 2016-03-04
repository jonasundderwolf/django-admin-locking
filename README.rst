====================
django-admin-locking
====================

Never lose work to another editor again!


Add ``admin_locking`` to ``INSTALLED_APPS`` and inherit from
``admin_locking.AdminLockingMixin``.


*How to add to all ModelAdmins?*

Use a common parent: instead of inheriting from ``admin.ModelAdmin``,
create a base object to inherit from.
