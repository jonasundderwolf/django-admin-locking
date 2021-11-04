====================
django-admin-locking
====================


.. image:: https://img.shields.io/pypi/v/django-admin-locking
    :target: https://pypi.python.org/pypi/django-admin-locking

.. image:: https://img.shields.io/pypi/pyversions/django-admin-locking
    :target: https://pypi.python.org/pypi/django-admin-locking

.. image:: https://img.shields.io/pypi/djversions/django-admin-locking
    :alt: PyPI - Django Version
    :target: https://pypi.python.org/pypi/django-admin-locking

Never lose work to another editor again!


Add ``admin_locking`` to ``INSTALLED_APPS`` and inherit from
``admin_locking.AdminLockingMixin``.


*How to add to all ModelAdmins?*

Use a common parent: instead of inheriting from ``admin.ModelAdmin``,
create a base object to inherit from.
